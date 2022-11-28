package kr.sosu.project.dailyline.user.controller;

import kr.sosu.project.global.auth.LoginUser;
import kr.sosu.project.global.auth.entity.SessionUser;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@RestController
public class HomeController {

    @GetMapping("/")
    public void home(@LoginUser SessionUser sessionUser) {
        // 리팩토링 예정
        if(sessionUser != null) {
            System.out.println("로그인");
            System.out.println(sessionUser.getUserEmail());
            System.out.println(sessionUser.getUserName());
        } else {
            System.out.println("로그아웃");
        }
    }
}
