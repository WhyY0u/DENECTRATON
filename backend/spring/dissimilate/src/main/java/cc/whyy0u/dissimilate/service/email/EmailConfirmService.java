package cc.whyy0u.dissimilate.service.email;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import cc.whyy0u.dissimilate.entity.email.EmailConfirmEntity;

@Service
public class EmailConfirmService {

    private final RedisTemplate<String, EmailConfirmEntity> redisTemplate;

    @Autowired
    public EmailConfirmService(RedisTemplate<String, EmailConfirmEntity> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public String generateCode() {
        return UUID.randomUUID().toString().substring(0, 4);
    }

    public EmailConfirmEntity findByEmail(String email) {
        return redisTemplate.opsForValue().get(email);
    }

    public EmailConfirmEntity findById(UUID uuid) {
        return redisTemplate.opsForValue().get(uuid.toString()); 
    }

    public EmailConfirmEntity createEmailConfirm(String email) {
        EmailConfirmEntity emailConfirm = new EmailConfirmEntity();
        String code = generateCode();
        emailConfirm.setUuid(UUID.randomUUID());
        emailConfirm.setCode(code);
        System.out.println(code);
        emailConfirm.setEmail(email);
        redisTemplate.opsForValue().set(email, emailConfirm); 
        return emailConfirm;
    }

    public void deleteById(UUID uuid) {
        redisTemplate.delete(uuid.toString());
    }
}
