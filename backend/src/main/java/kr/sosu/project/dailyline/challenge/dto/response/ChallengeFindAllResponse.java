package kr.sosu.project.dailyline.challenge.dto.response;

import kr.sosu.project.dailyline.challenge.domain.Challenge;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@NoArgsConstructor
public class ChallengeFindAllResponse {

    private List<ChallengeFindResponse> challenges;

    private ChallengeFindAllResponse(final List<ChallengeFindResponse> challenges) {
        this.challenges = challenges;
    }

    public static ChallengeFindAllResponse fromEntity(final Page<Challenge> findChallenges) {
        List<ChallengeFindResponse> challengeFindResponses = findChallenges.stream()
                .map(ChallengeFindResponse::fromEntity)
                .collect(Collectors.toList());

        return new ChallengeFindAllResponse(challengeFindResponses);
    }
}
