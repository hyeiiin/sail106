package com.sail.back.user.model.dto.request;

import lombok.*;
import lombok.extern.slf4j.Slf4j;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Slf4j
@Getter
public class FindRequest {
    private boolean email;
    private boolean department;
    private boolean name;
    private boolean provider;
    private boolean password;
    private boolean position;
    private boolean create_at;
    private boolean role;
    private boolean status;

}
