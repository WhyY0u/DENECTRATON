package cc.whyy0u.dissimilate.repository.email;

import org.springframework.data.repository.CrudRepository;
import java.util.UUID;

import cc.whyy0u.dissimilate.entity.email.EmailConfirmEntity;

public interface EmailConfirmRepository extends CrudRepository<EmailConfirmEntity, UUID> {

    EmailConfirmEntity findByEmail(String email);
}