package kr.sosu.project.global.auth;

import kr.sosu.project.dailyline.user.domain.Role;
import kr.sosu.project.dailyline.user.domain.User;
import lombok.Builder;
import lombok.Getter;

import java.util.Map;

@Getter
public class OAuthAttributes {
    private Map<String, Object> attributes;
    private String nameAttributeKey;
    private String userName;
    private String userEmail;
    private String userProfileImage;

    @Builder
    public OAuthAttributes(Map<String, Object> attributes, String nameAttributeKey, String userName, String userEmail, String userProfileImage){
        this.attributes = attributes;
        this.nameAttributeKey = nameAttributeKey;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userProfileImage = userProfileImage;
    }
    
    public static OAuthAttributes of(String registrationId, String userNameAttributeName, Map<String, Object> attributes) {
        return OAuthAttributes.builder()
                .userName((String) attributes.get("name"))
                .userEmail((String) attributes.get("email"))
                .userProfileImage((String) attributes.get("picture"))
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .build();
    }

    public User toEntity(){
        return User.builder()
                .userName(userName)
                .userEmail(userEmail)
                .userProfileImage(userProfileImage)
                .role(Role.USER)
                .build();
    }
}
