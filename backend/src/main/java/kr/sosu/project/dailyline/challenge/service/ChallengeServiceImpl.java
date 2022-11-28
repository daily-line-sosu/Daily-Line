package kr.sosu.project.dailyline.challenge.service;

import kr.sosu.project.dailyline.challenge.domain.Challenge;
import kr.sosu.project.dailyline.challenge.repository.ChallengeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ChallengeServiceImpl implements ChallengeService {

    private final ChallengeRepository challengeRepository;

    public ChallengeServiceImpl(final ChallengeRepository challengeRepository) {
        this.challengeRepository = challengeRepository;
    }


    @Override
    @Transactional(readOnly = true)
    public Page<Challenge> findChallengeAllList(Pageable pageable) {
        return challengeRepository.findAll(pageable);
    }
}
