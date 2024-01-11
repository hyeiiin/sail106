package com.sail.back.user.model.service;

import com.sail.back.user.model.dto.request.UserIdRequest;
import com.sail.back.user.model.dto.request.UserRegistRequest;
import com.sail.back.user.model.dto.request.UserUpdateRequest;
import com.sail.back.user.model.entity.User;

public interface UserService {

    User registUser(UserRegistRequest userRegistRequest);
    User infoUser(UserIdRequest userIdRequest);
    void withdrawUser(UserIdRequest userIdRequest);
    User updateUser(UserUpdateRequest userUpdateRequest);

}
