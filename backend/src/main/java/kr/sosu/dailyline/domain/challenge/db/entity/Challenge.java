package kr.sosu.dailyline.domain.challenge.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "challenge")
public class Challenge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "challenge_seq", nullable = false)
    private Long challengeSeq;

    @Column(name = "tag_seq", nullable = false)
    private int tagSeq;

    @Column(name = "user_seq", nullable = false)
    private Long userSeq;

    @Size(max = 20)
    @Column(name = "challenge_name", nullable = false)
    private String challengeName;

    @Size(max = 30)
    @Column(name = "challenge_target", nullable = false)
    private String challengeTarget;

    @Size(max = 30)
    @Column(name = "challenge_contents", nullable = false)
    private String challengeContents;

    @Column(name = "challenge_is_group", nullable = false)
    private boolean challengeIsGroup;

    @Column(name = "challenge_start_date", nullable = false)
    private LocalDateTime challengeStartDate;

    @Column(name = "challenge_end_date", nullable = false)
    private LocalDateTime challengeEndDate;

    @Column(name = "challenge_amount", nullable = false)
    private int challengeAmount;

    @Column(name = "challenge_color")
    private String challengeColor;
}
