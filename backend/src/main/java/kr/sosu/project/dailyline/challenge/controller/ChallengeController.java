package kr.sosu.project.dailyline.challenge.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import kr.sosu.project.dailyline.challenge.dto.response.ChallengeFindAllResponse;
import kr.sosu.project.dailyline.challenge.service.ChallengeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@Tag(name = "챌린지", description = "챌린지 관련 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/challenges")
public class ChallengeController {

    private final ChallengeService challengeService;

    @Tag(name = "챌린지")
    @Operation(summary = "챌린지 전체 목록", description = "등록된 챌린지 전체 목록")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "챌린지 전체 목록 조회"),
            @ApiResponse(responseCode = "204", description = "챌린지 전체 목록 없음"),
    })
    @GetMapping("")
    public ResponseEntity<ChallengeFindAllResponse> findAllChallenges(int page, int size) {
        log.info("findAllChallenges - Call");

        ChallengeFindAllResponse challenges = challengeService.findAllChallenges(PageRequest.of(page - 1, size, Sort.Direction.DESC, "challengeSeq"));

        return ResponseEntity.ok().body(challenges);
    }

    @Tag(name = "챌린지")
    @Operation(summary = "해시태그 별 챌린지 목록", description = "해시태그 별 등록된 챌린지 목록")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "해시태그 챌린지 전체 목록 조회"),
            @ApiResponse(responseCode = "204", description = "해시태그 챌린지 전체 목록 없음"),
    })
    @GetMapping("/{tagSeq}")
    public ResponseEntity<ChallengeFindAllResponse> findChallengesByTag(@Parameter(description = "해시태그 Sequence", required = true) @PathVariable Integer tagSeq, int page, int size) {
        log.info("findChallengesByTag - Call");

        ChallengeFindAllResponse challenges = challengeService.findChallengesByTag(tagSeq, PageRequest.of(page - 1, size, Sort.Direction.DESC, "challengeSeq"));

        return ResponseEntity.ok().body(challenges);
    }
}
