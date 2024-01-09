package com.sail.back.user.model.service;

import com.sail.back.user.model.dto.request.UserInfoRequest;
import com.sail.back.user.model.dto.request.UserJoinRequest;
import com.sail.back.user.model.entity.User;

public interface UserService {

    User joinUser(UserJoinRequest userJoinRequest);
    User infoUser(UserInfoRequest userInfoRequest);

}
