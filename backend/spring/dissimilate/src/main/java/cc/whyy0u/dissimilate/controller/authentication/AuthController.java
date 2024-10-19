package cc.whyy0u.dissimilate.controller.authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cc.whyy0u.dissimilate.controller.authentication.request.RegisterRequest;
import cc.whyy0u.dissimilate.controller.authentication.request.SignInRequest;
import cc.whyy0u.dissimilate.controller.authentication.request.SendCodeRequest;

import cc.whyy0u.dissimilate.entity.email.EmailConfirmEntity;
import cc.whyy0u.dissimilate.security.jwt.AuthenticationService;
import cc.whyy0u.dissimilate.service.email.EmailConfirmService;
import cc.whyy0u.dissimilate.service.email.EmailService;
import cc.whyy0u.dissimilate.service.user.UserService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    EmailConfirmService emailConfirmService;

    @Autowired
    EmailService emailService;

    @PostMapping("/sendCode")
    ResponseEntity<?> SendCode(@Valid @RequestBody SendCodeRequest sendCodeReqest) {
        if(userService.getUserByLogin(sendCodeReqest.getLogin()) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Логин Занят");
        } 
        if(userService.getUserByEmail(sendCodeReqest.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Почта Занята");
        }
        
        emailService.sendEmail(sendCodeReqest.getEmail(), "Creating a Dissimilate account", "The creation of an account on the Dissimilate platform has begun, if it was not you, then ignore this message\n" + 
                        "\n" +
                        "Code: " +  emailConfirmService.createEmailConfirm(sendCodeReqest.getEmail()).getCode());
        return ResponseEntity.ok().body("Код отправлен");
    }

    @PostMapping("/confirm")
    ResponseEntity<?> Confirm(@Valid @RequestBody RegisterRequest registrationRequest) {
        EmailConfirmEntity entity = emailConfirmService.findByEmail(registrationRequest.getEmail());
        if(entity == null) return ResponseEntity.badRequest().body("Сесия регистрации не активна");
        if(!entity.getCode().equals(registrationRequest.getCode())) return ResponseEntity.badRequest().body("Неверный Код");

        emailConfirmService.deleteById(entity.getUuid());
        return ResponseEntity.ok().body(authenticationService.signUp(registrationRequest));
    }

    @PostMapping("/login")
       ResponseEntity<?> Login(@Valid @RequestBody SignInRequest signInRequest) {
       return ResponseEntity.ok().body(authenticationService.signIn(signInRequest));
    }
}
