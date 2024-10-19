package cc.whyy0u.dissimilate.controller.images;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/images")
public class ImagesController {
    

    @GetMapping("/get")
     public ResponseEntity<?> getImages() {
        return ResponseEntity.ok().body("");
     }
}
