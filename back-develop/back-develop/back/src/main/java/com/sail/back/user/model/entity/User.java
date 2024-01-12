package com.sail.back.user.model.entity;

import com.sail.back.security.model.dto.request.LoginRequest;
import com.sail.back.user.model.dto.response.UserResponse;
import com.sail.back.user.model.entity.enums.AuthProvider;
import com.sail.back.user.model.entity.enums.UserGender;
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.entity.enums.UserStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CurrentTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.Map;

@Entity
@Table(name="users")
@Getter
@Setter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", precision = 10, scale = 2)
    private Long id;

    @Column(name="email", unique = true, nullable = false)
    private String email;

    @Column(name="name")
    private String name;

    @Column(name = "nickname")
    private String nickname;

    @Column(name="password")
    private String password;

    @Column(name = "create_at", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createAt;

    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    @Enumerated(EnumType.STRING)
    private UserRole role;

    @Enumerated(EnumType.STRING)
    private UserStatus status;

    @Column(name="profile_img_url")
    private String profileImgUrl;

    @Enumerated(EnumType.STRING)
    private UserGender gender;

    @Column(name = "birthdate_year")
    private String birthdateYear;

    @Column(name = "birthdate_month")
    private String birthdateMonth;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(() -> role.name());
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    //밴유저
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    //비밀번호
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        if(status == UserStatus.INACTIVE){
            return false;
        }
        return true;
    }

    public static User of(OAuth2User oAuth2User){
        Map<String, Object> map = oAuth2User.getAttributes();
        User user = new User();
        String email =(String) map.get("email");
        String name =(String) map.get("name");
        String nickName =(String) map.get("nickName");
        String birthDateMonth =(String) map.get("birthDateMonth");
        String birthDateYear =(String) map.get("birthDateYear");
        String gender = (String) map.get("gender");
        String picture =(String) map.get("picture");
        AuthProvider provider = (AuthProvider) map.get("provider");

        if (email!=null) user.setEmail(email);
        if (name!=null) user.setName(name);
        if (nickName!=null) user.setNickname(nickName);
        if (birthDateMonth!=null) user.setBirthdateMonth(birthDateMonth);
        if (birthDateYear!=null) user.setBirthdateYear(birthDateYear);
        if (gender!=null) user.setGender(ToMap(gender));
        if (picture!=null) user.setProfileImgUrl(picture);
        if (provider!=null) user.setProvider(provider);
        user.setStatus(UserStatus.ACTIVE);
        user.setRole(UserRole.USER);
        return user;
    }

    static UserGender ToMap(String gender){
        if (gender.equals("male")||gender.equals("MALE")||gender.equals("M")){
            return UserGender.MALE;
        }
        return UserGender.FEMALE;
    }
}
