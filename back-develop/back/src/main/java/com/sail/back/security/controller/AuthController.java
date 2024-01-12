package com.sail.back.security.controller;

import com.sail.back.global.utils.MessageUtils;
import com.sail.back.security.model.dto.request.LoginRequest;
import com.sail.back.security.model.dto.request.RefreshRequest;
import com.sail.back.security.model.dto.response.GeneratedToken;
import com.sail.back.security.model.service.AuthService;
import com.sail.back.security.model.service.TokenService;
import com.sail.back.user.model.entity.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/v1/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<MessageUtils> login(@RequestBody LoginRequest loginRequest){
        return ResponseEntity.ok().body(MessageUtils.success(authService.login(loginRequest.getEmail(), loginRequest.getPassword())));
    }

    @PostMapping("/logout")
    public ResponseEntity<MessageUtils> logout(@AuthenticationPrincipal User user){
        authService.logout(user);
        return ResponseEntity.ok().body(MessageUtils.success());
    }

    @PostMapping("/refresh")
    public ResponseEntity<MessageUtils> refresh(@RequestBody RefreshRequest refreshRequest){
        return ResponseEntity.ok().body(MessageUtils.success(authService.refresh(refreshRequest.getRefreshToken())));
    }

}
