package com.sail.back.user.model.dto.request;

import com.sail.back.user.model.entity.enums.AuthProvider;
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.entity.enums.UserStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Slf4j
@Getter
public class UserInfoRequest {
    private String email;
    private String department;
    private String password;
    private String name;
    private AuthProvider provider;
    private String position;
    private LocalDateTime create_at;
    private UserRole role;
    private UserStatus status;

}
