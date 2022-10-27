package kr.sosu.dailyline.global.oauth;

import kr.sosu.dailyline.domain.user.db.entity.Role;
import kr.sosu.dailyline.domain.user.db.entity.User;
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
    public OAuthAttributes(Map<String, Object> attributes, String nameAttributeKey, String userName, String userEmail, String userProfileImage) {
        this.attributes = attributes;
        this.nameAttributeKey = nameAttributeKey;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userProfileImage = userProfileImage;
    }

    public static OAuthAttributes of(String registrationId, String userNameAttributeName, Map<String, Object> attributes) {
        return ofGoogle(userNameAttributeName, attributes);
    }

    private static OAuthAttributes ofGoogle(String userNameAttributeName, Map<String, Object> attributes) {
        return OAuthAttributes.builder()
                .userName((String) attributes.get("userName"))
                .userEmail((String) attributes.get("userEmail"))
                .userProfileImage((String) attributes.get("picture"))
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .build();
    }


    public User toEntity() {
        return User.builder()
                .userName(userName)
                .userEmail(userEmail)
                .userProfileImage(userProfileImage)
                .role(Role.USER)
                .build();
    }
}
