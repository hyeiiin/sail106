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
<<<<<<< HEAD
    private boolean createAt;
    private boolean role;
    private boolean status;
    private boolean profileImgUrl;
    private boolean userGender;
    private boolean birthdateYear;
    private boolean birthdateMonth;
    private boolean birthdateDay;
=======
    private boolean position;
    private boolean create_at;
    private boolean role;
    private boolean status;

>>>>>>> ecf721ec8be3afb8901edecd501dd04cdb6de13a
}
