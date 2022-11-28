package kr.sosu.project.dailyline.challenge.service;

import kr.sosu.project.dailyline.challenge.domain.Challenge;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public interface ChallengeService {
    Page<Challenge> findChallengeAllList(Pageable pageable);
}
