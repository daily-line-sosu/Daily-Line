package kr.sosu.dailyline.domain.challenge.db.repository;

import kr.sosu.dailyline.domain.challenge.db.entity.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
}
