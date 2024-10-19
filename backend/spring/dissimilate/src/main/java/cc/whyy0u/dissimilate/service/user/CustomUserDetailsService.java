package cc.whyy0u.dissimilate.service.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import cc.whyy0u.dissimilate.entity.user.CustomUserDetails;
import cc.whyy0u.dissimilate.entity.user.UserEntity;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity userEntity = userService.getUserByLogin(username);
        if (userEntity == null) {
            throw new UsernameNotFoundException("User not found: " + username);
        }
        return new CustomUserDetails(userEntity);
    }

    public UserDetailsService userDetailsService() {
        return this::loadUserByUsername;
    }
}