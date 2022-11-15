package kr.sosu.dailyline.domain.challenge.service;

import kr.sosu.dailyline.domain.challenge.db.entity.Challenge;
import kr.sosu.dailyline.domain.challenge.db.repository.ChallengeRepository;
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
