package cc.whyy0u.dissimilate.service.user.profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cc.whyy0u.dissimilate.entity.user.Profile.UserProfileEntity;
import cc.whyy0u.dissimilate.repository.user.Profile.UserProfileRepository;

@Service
public class UserProfileService {

    @Autowired
    private UserProfileRepository userProfileRepository;


    public UserProfileEntity findProfileEntityById(Long id) {
        return userProfileRepository.findByuserid(id).orElse(null);
    }

    public void save(UserProfileEntity entity) {
        userProfileRepository.save(entity);
    }

    
}
