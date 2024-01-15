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
=======
<<<<<<< HEAD
>>>>>>> 743e2362dddce835be884131396d442c80cd885e
    private boolean createAt;
    private boolean role;
    private boolean status;
    private boolean profileImgUrl;
    private boolean userGender;
    private boolean birthdateYear;
    private boolean birthdateMonth;
    private boolean birthdateDay;
<<<<<<< HEAD
=======
=======
    private boolean position;
    private boolean create_at;
    private boolean role;
    private boolean status;

>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
>>>>>>> 743e2362dddce835be884131396d442c80cd885e
}
