package com.sail.back.user.model.service;

import com.sail.back.user.model.dto.request.FindRequest;
import com.sail.back.user.model.dto.request.UserRegistRequest;
import com.sail.back.user.model.dto.request.UserUpdateRequest;
import com.sail.back.user.model.dto.response.UserResponse;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.entity.enums.AuthProvider;
import com.sail.back.user.model.entity.enums.UserRole;
import com.sail.back.user.model.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service("userService")
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public void registUser(UserRegistRequest userRegistRequest, UserRole role, AuthProvider provider){
        User user = User.builder()
                .email(userRegistRequest.getEmail())
                .password(passwordEncoder.encode(userRegistRequest.getPassword()))
                .role(role)
                .provider(provider)
                .build();
        userRepository.save(user);
    }

    @Override
    public UserResponse infoUser(FindRequest findRequest, User user) {
        return UserResponse.of(findRequest, user);
    }

    @Override
    public void withdrawUser(User user) {
        userRepository.delete(user);
    }
    @Override
    @Transactional
    public void updateUser(UserUpdateRequest request, User user) {
        if(request.getBirthdateYear() != null)user.setBirthdateYear(request.getBirthdateYear());
        if(request.getBirthdateMonth() != null)user.setBirthdateMonth(request.getBirthdateMonth());
        if(request.getGender() != null)user.setGender(request.getGender());
        if(request.getName()!= null)user.setName(request.getName());
        if(request.getRole()!=null)user.setRole(request.getRole());
        if(request.getNickName()!=null)user.setNickname(request.getNickName());
        if(request.getStatus()!=null)user.setStatus(request.getStatus());
        if(request.getProfileImgUrl()!=null)user.setProfileImgUrl(request.getProfileImgUrl());
        userRepository.save(user);
    }

}
