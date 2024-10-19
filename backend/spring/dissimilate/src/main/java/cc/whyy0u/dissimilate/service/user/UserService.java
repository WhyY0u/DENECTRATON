package cc.whyy0u.dissimilate.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.stereotype.Service;

import cc.whyy0u.dissimilate.entity.user.CustomUserDetails;
import cc.whyy0u.dissimilate.entity.user.UserEntity;
import cc.whyy0u.dissimilate.repository.user.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserEntity getUserByLogin(String login) {
        return userRepository.findByLogin(login).orElse(null);
    }

    public UserEntity getUserByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }
    public UserEntity getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public void saveEntity(UserEntity entity) {
        userRepository.save(entity);
    }
    
    public CustomUserDetails getCurrentUser() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return new CustomUserDetails(getUserByLogin(username));
    }
   
}
