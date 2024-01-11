package com.sail.back.user.model.dto.request;

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
public class UserIdRequest {
    private Long id;
}
