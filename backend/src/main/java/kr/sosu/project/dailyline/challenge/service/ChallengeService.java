package kr.sosu.project.dailyline.challenge.service;

import kr.sosu.project.dailyline.challenge.domain.Challenge;
import kr.sosu.project.dailyline.challenge.dto.response.ChallengeFindAllResponse;
import kr.sosu.project.dailyline.challenge.repository.ChallengeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class ChallengeService {

    private final ChallengeRepository challengeRepository;

    @Transactional(readOnly = true)
    public ChallengeFindAllResponse findAllChallenges(Pageable pageable) {
        Page<Challenge> findChallenges = challengeRepository.findAll(pageable);

        return ChallengeFindAllResponse.fromEntity(findChallenges);
    }
}
