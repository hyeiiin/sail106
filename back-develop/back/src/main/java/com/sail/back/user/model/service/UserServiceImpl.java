package com.sail.back.user.model.service;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 743e2362dddce835be884131396d442c80cd885e
import com.sail.back.user.model.dto.request.UserIdRequest;
import com.sail.back.user.model.dto.request.UserRegistRequest;
import com.sail.back.user.model.dto.request.UserUpdateRequest;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.repository.UserRepository;
import io.micrometer.common.util.StringUtils;
import io.netty.util.internal.StringUtil;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.beans.Transient;
import java.util.Optional;

@Service("userService")
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public User registUser(UserRegistRequest userRegistRequest){
        User user = User.builder().email(userRegistRequest.getEmail()).password(passwordEncoder.encode(userRegistRequest.getPassword())).build();
        return userRepository.save(user);
    }

    @Override
    public User infoUser(UserIdRequest userIdRequest) {

        User user = userRepository.findById(userIdRequest.getId()).get();
        return user;
    }

    @Override
    public void withdrawUser(UserIdRequest userIdRequest) {
        userRepository.delete(User.builder().id(userIdRequest.getId()).build());
    }
    @Override
    @Transactional
    public User updateUser(UserUpdateRequest userUpdateRequest) {
        User originalUser = userRepository.findById(userUpdateRequest.getId()).get();
        if (originalUser != null) {
            User user = User.builder().id(originalUser.getId()).email(originalUser.getEmail()).createAt(originalUser.getCreateAt()).password(originalUser.getPassword()).name(userUpdateRequest.getName()).build();
            userRepository.save(user);
            return user;
        }
        return originalUser;
<<<<<<< HEAD
=======
=======
import com.sail.back.user.model.dto.request.UserInfoRequest;
import com.sail.back.user.model.dto.request.UserJoinRequest;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements UserService{

    @Autowired
    UserRepository userRepository;

    @Override
    public User joinUser(UserJoinRequest userJoinRequest){
        User user = User.builder().email(userJoinRequest.getEmail()).password(userJoinRequest.getPassword()).build();
        return userRepository.save(user);
    }

    @Override
    public User infoUser(UserInfoRequest userInfoRequest) {
        User user = User.builder().email(userInfoRequest.getEmail()).password(userInfoRequest.getPassword()).build();
        return userRepository.save(user);
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
>>>>>>> 743e2362dddce835be884131396d442c80cd885e
    }

}
