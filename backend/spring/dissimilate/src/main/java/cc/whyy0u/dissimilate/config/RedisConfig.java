package cc.whyy0u.dissimilate.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import cc.whyy0u.dissimilate.entity.email.EmailConfirmEntity;


@Configuration
public class RedisConfig {

    @Bean
    public RedisConnectionFactory redisConnectionFactory() {
        return new LettuceConnectionFactory(); 
    }

    @Bean
    public RedisTemplate<String, EmailConfirmEntity> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate<String, EmailConfirmEntity> template = new RedisTemplate<>();
        template.setConnectionFactory(redisConnectionFactory); 
        template.setKeySerializer(new StringRedisSerializer());
        template.setValueSerializer(new GenericJackson2JsonRedisSerializer());
        return template;
    }
}