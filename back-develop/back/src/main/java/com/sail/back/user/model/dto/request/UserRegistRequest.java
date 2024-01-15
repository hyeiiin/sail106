package com.sail.back.user.model.dto.request;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Slf4j
@Getter
@ToString
public class UserRegistRequest {
    private String email;
    private String password;
}
