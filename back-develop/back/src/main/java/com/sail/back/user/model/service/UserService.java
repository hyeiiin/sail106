package com.sail.back.user.model.service;

<<<<<<< HEAD
import com.sail.back.user.model.dto.request.UserIdRequest;
import com.sail.back.user.model.dto.request.UserRegistRequest;
import com.sail.back.user.model.dto.request.UserUpdateRequest;
=======
import com.sail.back.user.model.dto.request.UserInfoRequest;
import com.sail.back.user.model.dto.request.UserJoinRequest;
>>>>>>> ecf721ec8be3afb8901edecd501dd04cdb6de13a
import com.sail.back.user.model.entity.User;

public interface UserService {

<<<<<<< HEAD
    User registUser(UserRegistRequest userRegistRequest);
    User infoUser(UserIdRequest userIdRequest);
    void withdrawUser(UserIdRequest userIdRequest);
    User updateUser(UserUpdateRequest userUpdateRequest);
=======
    User joinUser(UserJoinRequest userJoinRequest);
    User infoUser(UserInfoRequest userInfoRequest);
>>>>>>> ecf721ec8be3afb8901edecd501dd04cdb6de13a

}
