package cc.whyy0u.dissimilate.repository.user.Card;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import cc.whyy0u.dissimilate.entity.user.Card.UserCardEntity;
import java.util.List;

public interface UserCardRepository extends JpaRepository<UserCardEntity, Long> {
     List<UserCardEntity> findByUserid(Long id);
}
