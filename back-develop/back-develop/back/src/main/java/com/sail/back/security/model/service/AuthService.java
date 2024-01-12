package com.sail.back.security.model.service;

import com.sail.back.security.exception.AuthErrorCode;
import com.sail.back.security.exception.AuthException;
import com.sail.back.security.model.dto.response.GeneratedToken;
import com.sail.back.user.exception.UserErrorCode;
import com.sail.back.user.exception.UserException;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Slf4j
@Service
public class AuthService {
    private final TokenService tokenService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    public GeneratedToken login(String email, String password){
        User user = userRepository.findByEmail(email).orElseThrow(() -> new UserException(UserErrorCode.NOT_EXISTS_USER));
        if(passwordEncoder.matches(password, user.getPassword())){
            return tokenService.generatedToken(user.getId(), user.getRole().name());
        }
        throw new AuthException(AuthErrorCode.NOT_EXISTS);

    }

    public void logout(User user){
        tokenService.RemoveToken(user.getId());
    }

    public GeneratedToken refresh(String refreshToken){
        return tokenService.republishToken(refreshToken);
    }

}
