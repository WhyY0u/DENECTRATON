package cc.whyy0u.dissimilate.repository.user.Profile;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import cc.whyy0u.dissimilate.entity.user.Profile.UserProfileEntity;

public interface UserProfileRepository extends JpaRepository<UserProfileEntity, Long> {
    Optional<UserProfileEntity> findByuserid(Long userid);
}
