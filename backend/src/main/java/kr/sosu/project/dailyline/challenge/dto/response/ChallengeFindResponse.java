package kr.sosu.project.dailyline.challenge.dto.response;

import kr.sosu.project.dailyline.challenge.domain.Challenge;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
public class ChallengeFindResponse {

    private Long challengeSeq;
    private String tagName;
    private String userName;
    private String challengeName;
    private boolean challengeIsGroup;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private int challengeAmount;
    private String challengeColor;

    public static ChallengeFindResponse fromEntity(final Challenge challenge) {
        return ChallengeFindResponse.builder()
                .challengeSeq(challenge.getChallengeSeq())
                .tagName(challenge.getTag().getTagName())
                .userName(challenge.getUser().getUserName())
                .challengeName(challenge.getChallengeName())
                .challengeIsGroup(challenge.isChallengeIsGroup())
                .startDate(challenge.getChallengeStartDate())
                .endDate(challenge.getChallengeEndDate())
                .challengeAmount(challenge.getChallengeAmount())
                .challengeColor(challenge.getChallengeColor())
                .build();
    }
}
