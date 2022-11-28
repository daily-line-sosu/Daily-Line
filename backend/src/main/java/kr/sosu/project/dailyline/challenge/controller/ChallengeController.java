package kr.sosu.project.dailyline.challenge.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import kr.sosu.project.dailyline.challenge.domain.Challenge;
import kr.sosu.project.dailyline.challenge.service.ChallengeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@Tag(name = "챌린지", description = "챌린지 관련 API")
@RestController
@RequestMapping("/api/challenges")
public class ChallengeController {

    private final ChallengeService challengeService;

    public ChallengeController(ChallengeService challengeService) {
        this.challengeService = challengeService;
    }


    @Tag(name = "챌린지")
    @Operation(summary = "챌린지 전체 목록", description = "등록된 챌린지 전체 목록")
    @ApiResponses({
            @ApiResponse(responseCode = "200", description = "챌린지 전체 목록 조회"),
            @ApiResponse(responseCode = "204", description = "챌린지 전체 목록 없음"),
    })
    @GetMapping("")
    public ResponseEntity<Page<Challenge>> challengeAllList(int page, int size) {
        Page<Challenge> challengePage = challengeService.findChallengeAllList(PageRequest.of(page - 1, size));

        return ResponseEntity.ok(challengePage);
    }
}
