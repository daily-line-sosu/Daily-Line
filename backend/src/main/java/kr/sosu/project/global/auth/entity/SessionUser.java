package kr.sosu.project.global.auth.entity;

import kr.sosu.project.dailyline.user.domain.User;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class SessionUser implements Serializable {
    private String userName;
    private String userEmail;
    private String userProfileImage;

    public SessionUser(User user) {
        this.userName = user.getUserName();
        this.userEmail = user.getUserEmail();
        this.userProfileImage = user.getUserProfileImage();
    }
}
