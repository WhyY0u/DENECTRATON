package cc.whyy0u.dissimilate.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/organisation")
public class OrganisationController {
    
  @GetMapping("/profile:id")
   public ResponseEntity<?> getProfileOrganisation() {
     
    return ResponseEntity.ok().body(null);
   }

   @GetMapping("/profile/my")
   public ResponseEntity<?> getMyProfile() {
     
    return ResponseEntity.ok().body(null);
   }
}
