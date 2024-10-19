package cc.whyy0u.dissimilate.security.jwt;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import cc.whyy0u.dissimilate.controller.authentication.request.RegisterRequest;
import cc.whyy0u.dissimilate.controller.authentication.request.SignInRequest;
import cc.whyy0u.dissimilate.entity.user.CustomUserDetails;
import cc.whyy0u.dissimilate.entity.user.UserEntity;
import cc.whyy0u.dissimilate.service.user.UserService;



@Service
public class AuthenticationService {

    private final UserService userService;

    private final JwtService jwtService;

    private final PasswordEncoder passwordEncoder;
    
    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthenticationService(UserService userService, 
                                 JwtService jwtService, 
                                 PasswordEncoder passwordEncoder, 
                                 AuthenticationManager authenticationManager) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }


    public String signUp(RegisterRequest request) {
        UserEntity entity = new UserEntity();
        entity.setEmail(request.getEmail());
        entity.setLogin(request.getLogin());
        entity.setName(request.getName());
        entity.setPassword(passwordEncoder.encode(request.getPassword()));
        entity.setPatronymic(request.getPatronymic());
        entity.setSurname(request.getSurname());
        entity.setRole(request.getRole());
        
        String jwt = jwtService.generateToken(new CustomUserDetails(entity));
        entity.setToken(jwt); 
    
        userService.saveEntity(entity);

        return jwt; 
    }
    


    public String signIn(SignInRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.getLogin(),
                request.getPassword()
        ));
    
        UserEntity user = userService.getUserByLogin(request.getLogin()); 
    
        String jwt;
        if(user.getToken() != null && !user.getToken().isEmpty()) {
            jwt = user.getToken(); 
        } else {
            jwt = jwtService.generateToken(new CustomUserDetails(user)); 
            user.setToken(jwt);
            user.preUpdate();
            userService.saveEntity(user);
        }
        return jwt; 
    }
}