package kr.sosu.dailyline.domain.challenge.service;

import kr.sosu.dailyline.domain.challenge.db.entity.Challenge;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public interface ChallengeService {
    Page<Challenge> findChallengeAllList(Pageable pageable);
}
