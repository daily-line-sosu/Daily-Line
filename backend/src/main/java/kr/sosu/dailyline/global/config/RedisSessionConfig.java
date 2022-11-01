package kr.sosu.dailyline.global.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;
import org.springframework.session.config.annotation.web.http.EnableSpringHttpSession;
import org.springframework.session.data.redis.RedisSessionRepository;

import java.time.Duration;

@EnableSpringHttpSession
@Configuration
public class RedisSessionConfig {

    @Bean
    public RedisOperations<String, Object> sessionRedisOperations(RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate<String, Object> template = new RedisTemplate<>();

        template.setConnectionFactory(redisConnectionFactory);
        template.setKeySerializer(new StringRedisSerializer());
        template.setHashKeySerializer(new StringRedisSerializer());

        return template;
    }

    @Bean
    public RedisSessionRepository sessionRepository(RedisOperations<String, Object> sessionRedisOperations) {
        RedisSessionRepository redisSessionRepository = new RedisSessionRepository(sessionRedisOperations);
        redisSessionRepository.setDefaultMaxInactiveInterval(Duration.ofSeconds(300));

        return redisSessionRepository;
    }

}
