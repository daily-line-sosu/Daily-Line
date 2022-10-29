package kr.sosu.dailyline.domain.user.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_seq")
    Long userSeq;

    @Size(max = 50)
    @Column(name = "user_email", nullable = false)
    String userEmail;
    
    @Size(max = 20)
    @Column(name = "user_name", nullable = false)
    String userName;

    @Size(max = 200)
    @Column(name = "user_profile_image", nullable = false)
    String userProfileImage;

    @Column(name = "user_introduce")
    @Size(max = 50)
    String userIntroduce;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_role")
    private Role role;

    @Builder
    public User(String userEmail, String userName, String userProfileImage, Role role) {
        this.userEmail = userEmail;
        this.userName = userName;
        this.userProfileImage = userProfileImage;
        this.role = role;
    }

    public User update(String userName, String userProfileImage) {
        this.userName = userName;
        this.userProfileImage = userProfileImage;

        return this;
    }

    public String getRoleKey() {
        return this.role.getKey();
    }
}
