package com.sail.back.user.model.dto.request;

import com.sail.back.user.model.entity.enums.AuthProvider;
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.entity.enums.UserStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Slf4j
@Getter
public class UserUpdateRequest {
    private Long id;
    private String email;
    private String department;
    private String name;
    private AuthProvider provider;
    private String password;
    private UserRole role;
    private UserStatus status;
    private String profileImgUrl;
}
