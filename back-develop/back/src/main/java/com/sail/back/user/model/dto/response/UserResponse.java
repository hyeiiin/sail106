package com.sail.back.user.model.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sail.back.user.model.dto.request.FindRequest;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.entity.enums.AuthProvider;
import com.sail.back.user.model.entity.enums.UserGender;
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.entity.enums.UserStatus;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.time.LocalDateTime;
import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
@Builder
public class UserResponse {

    private Long id;
    private String email;
    private String name;
    private String nickname;
    private LocalDateTime createAt;
    private AuthProvider provider;
    private UserRole role;
    private UserStatus status;
    private String profileImgUrl;
    private UserGender gender;
    private String birthdateYear;
    private String birthdateMonth;
    private boolean hasAdditionalInfo;
    public static UserResponse of(FindRequest request, User user){
        UserResponse response = new UserResponse();
        if (request.isId()&&user.getId()!=null) response.setId(user.getId());
        if (request.isEmail()&&user.getEmail()!=null) response.setEmail(user.getEmail());
        if (request.isName()&&user.getName()!=null) response.setName(user.getName());
        if (request.isNickname()&&user.getNickname()!=null) response.setNickname(user.getNickname());
        if (request.isCreate_at()&&user.getCreateAt()!=null) response.setCreateAt(user.getCreateAt());
        if (request.isProvider()&&user.getProvider()!=null) response.setProvider(user.getProvider());
        if (request.isRole()&&user.getRole()!=null) response.setRole(user.getRole());
        if (request.isStatus()&&user.getStatus()!=null) response.setStatus(user.getStatus());
        if (request.isProfile_img_url()&&user.getProfileImgUrl()!=null) response.setProfileImgUrl(user.getProfileImgUrl());
        if (request.isGender()&&user.getGender()!=null) response.setGender(user.getGender());
        if (request.isBirthdate_year()&&user.getBirthdateYear()!=null) response.setBirthdateYear(user.getBirthdateYear());
        if (request.isBirthdate_month()&&user.getBirthdateMonth()!=null) response.setBirthdateMonth(user.getBirthdateMonth());
        if(user.getName() == null || user.getBirthdateYear() == null || user.getBirthdateMonth()== null || user.getName() == null || user.getGender() == null) response.setHasAdditionalInfo(true);
        return response;
    }

}

