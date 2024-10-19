package cc.whyy0u.dissimilate.entity.user;

import java.util.Set;
import java.util.HashSet;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


public class CustomUserDetails implements UserDetails {

    private final UserEntity entity;

    public CustomUserDetails(UserEntity entity) {
      this.entity = entity;
    }

   public UserEntity getEntity() {
    return entity;
   }
    @Override
    public String getPassword() {
        return entity.getPassword();
    }

    @Override
    public String getUsername() {
        return entity.getLogin();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; 
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; 
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    @Override
    public java.util.Collection<? extends GrantedAuthority> getAuthorities() {
    Set<GrantedAuthority> authorities = new HashSet<>();
    Role role = entity.getRole();
    if (role != null) {
        authorities.add(new SimpleGrantedAuthority("ROLE_" + role.name()));
    }

    return authorities;
  }
}