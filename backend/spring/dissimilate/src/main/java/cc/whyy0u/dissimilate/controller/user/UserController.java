package cc.whyy0u.dissimilate.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;

import cc.whyy0u.dissimilate.controller.user.request.ProfileUPD;
import cc.whyy0u.dissimilate.entity.comment.CommentEntity;
import cc.whyy0u.dissimilate.entity.user.Role;
import cc.whyy0u.dissimilate.entity.user.UserEntity;
import cc.whyy0u.dissimilate.entity.user.Card.UserCardEntity;
import cc.whyy0u.dissimilate.entity.user.Profile.UserProfileEntity;
import cc.whyy0u.dissimilate.entity.user.Profile.UserProfileEntityUtils;
import cc.whyy0u.dissimilate.service.user.UserService;
import cc.whyy0u.dissimilate.service.user.card.UserCardService;
import cc.whyy0u.dissimilate.service.user.comment.CommentService;
import cc.whyy0u.dissimilate.service.user.profile.UserProfileService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
     UserService userService;

     @Autowired
     UserProfileService userProfileService;
     
     @Autowired 
     UserCardService userCardService;

     @Autowired
     CommentService commentService;
     

    @GetMapping("/profile/:id")
    public ResponseEntity<?> getProfileUser(@RequestHeader long id) {
        UserEntity userEntity = userService.getUserById(id);
        UserProfileEntity entity = userProfileService.findProfileEntityById(userEntity.getId());
        List<CommentEntity> comments = commentService.findProfileEntityById(userEntity.getId());
        List<UserCardEntity> userCards = userCardService.findCardByUserID(userEntity.getId());
        UserProfileEntityUtils profile = new UserProfileEntityUtils(entity, userCards, comments, userEntity.getName(), userEntity.getSurname(), userEntity.getPatronymic(), userEntity.getRole(), userEntity.getEmail());
        return ResponseEntity.ok(profile);
    }

    @GetMapping("/profile/my")
    public ResponseEntity<?> getProfileAll() {
        UserEntity user = userService.getCurrentUser().getEntity();
        UserProfileEntity entity = userProfileService.findProfileEntityById(user.getId());
        List<CommentEntity> comments = commentService.findProfileEntityById(user.getId());
        List<UserCardEntity> userCards = userCardService.findCardByUserID(user.getId());
        UserProfileEntityUtils profile = new UserProfileEntityUtils(entity, userCards, comments, user.getName(), user.getSurname(), user.getPatronymic(), user.getRole(), user.getEmail());
        return ResponseEntity.ok(profile);
    }

    @PutMapping("/role")
    public ResponseEntity<?> roleUpdate(@RequestBody String role) {
        Long id = userService.getCurrentUser().getEntity().getId();
        UserEntity entity = userService.getUserById(id);
        if(entity != null) {
         if(role != null && entity.getRole() == null) {
             entity.setRole(role == "Employer" ? Role.Employer : Role.Worker);
             userService.saveEntity(entity);
            return ResponseEntity.ok("Role updated successfully.");
         }
        }
        return ResponseEntity.badRequest().body("400");
    }

    @PutMapping(value = "/profile/avatar", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
public ResponseEntity<?> updateProfile(@RequestParam("file") MultipartFile file) {
    if (!file.isEmpty()) {
        String uploadDirPath = "/app/uploads/";
        File uploadDir = new File(uploadDirPath);
        if (!uploadDir.exists()) {
            boolean created = uploadDir.mkdirs(); 
            if (created) {
                System.out.println("Directory created: " + uploadDirPath);
            } else {
                System.out.println("Failed to create directory: " + uploadDirPath);
                 uploadDir = new File("./img");
                 uploadDir.mkdirs(); 
            }
        } else {
            System.out.println("Directory already exists: " + uploadDirPath);
        }
        
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        File uploadFile = new File(uploadDir, fileName);
        
        try {
            file.transferTo(uploadFile);
            System.out.println("File saved: " + uploadFile.getAbsolutePath());
            
            UserProfileEntity entity = userProfileService.findProfileEntityById(userService.getCurrentUser().getEntity().getId());
            entity.setAvatarURL(fileName);
            userProfileService.save(entity);
        } catch (IOException e) {
            System.out.println("IOException while saving file: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Ошибка при сохранении файла: " + e.getMessage());
        }
    } else {
        System.out.println("Uploaded file is empty.");
        return ResponseEntity.badRequest().body("Файл не загружен.");
    }
    
    return ResponseEntity.ok().body("Аватар успешно обновлен.");
}

    @PutMapping("/profile/update")
    public ResponseEntity<?> updateProfile(  @RequestParam("file") MultipartFile file, @RequestBody ProfileUPD profileUPD) {
        Long id = userService.getCurrentUser().getEntity().getId();
        
        if(id != null) {
        UserProfileEntity entity = userProfileService.findProfileEntityById(userService.getCurrentUser().getEntity().getId());
        if(entity == null) {
          entity = new UserProfileEntity();
          entity.setCurntSocial(10);
          entity.setDescription(profileUPD.Description());
          entity.setSocialNetWork(profileUPD.getSocialNetWork());
          entity.setSKill(profileUPD.getSkill());
          entity.setUserID(id);
          userProfileService.save(entity);
          return ResponseEntity.ok("UPD.");
        } else {
            

            if(profileUPD.getAvatarURL() != null) entity.setAvatarURL(profileUPD.getAvatarURL());
            if(Float.valueOf(profileUPD.getCurntSocial()) != null) entity.setCurntSocial(profileUPD.getCurntSocial());
            if(profileUPD.getFollowers() != null) entity.setFollowers(profileUPD.getFollowers());
            if(profileUPD.getFollowing() != null) entity.setFollowing(profileUPD.getFollowing());
            if(profileUPD.getSocialNetWork() != null) entity.setSocialNetWork(profileUPD.getSocialNetWork());
            if(profileUPD.getSkill() != null) entity.setSKill(profileUPD.getSkill());
            if(profileUPD.getPhone() != null) entity.setPhone(profileUPD.getPhone());
            userProfileService.save(entity);
            return ResponseEntity.ok("UPD.");
        }
        }
        return ResponseEntity.badRequest().body(500);
    }
    
}
