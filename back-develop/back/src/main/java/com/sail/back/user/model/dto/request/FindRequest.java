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
    private boolean createAt;
    private boolean role;
    private boolean status;
    private boolean profileImgUrl;
    private boolean userGender;
    private boolean birthdateYear;
    private boolean birthdateMonth;
    private boolean birthdateDay;
}
