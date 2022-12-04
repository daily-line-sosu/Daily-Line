package kr.sosu.project.dailyline.challenge.repository;

import kr.sosu.project.dailyline.challenge.domain.Challenge;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
    Page<Challenge> findChallengesByTagSeq(Integer tagSeq, Pageable pageable);
}
