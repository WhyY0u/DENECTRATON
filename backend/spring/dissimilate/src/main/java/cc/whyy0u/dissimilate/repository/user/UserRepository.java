package cc.whyy0u.dissimilate.repository.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import cc.whyy0u.dissimilate.entity.user.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByLogin(String login);
    Optional<UserEntity> findByEmail(String email);
}
