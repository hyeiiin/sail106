package com.sail.back.security.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sail.back.global.utils.MessageUtils;
import com.sail.back.security.model.service.TokenService;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.repository.UserRepository;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Component
public class OAuthSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final TokenService tokenService;
    private final UserRepository userRepository;
    private final ObjectMapper objectMapper;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();

        User oauth2user = User.of(oAuth2User);

        response.setContentType("application/json;charset=UTF-8");
        response.setStatus(HttpServletResponse.SC_OK);
        //회원 가입 일 경우
        Optional<User> optionalUser = userRepository.findByEmail(oauth2user.getEmail());
        if (optionalUser.isPresent()){
            //로그인인 경우
            User user = optionalUser.get();
            response.getWriter().write(objectMapper.writeValueAsString(
                    MessageUtils.success(tokenService.generatedToken(user.getId(), user.getRole().name()))
            ));
        }
        else {
            //회원가입일 경우
            User saveUser = userRepository.save(oauth2user);
            response.getWriter().write(objectMapper.writeValueAsString(
                    MessageUtils.success(tokenService.generatedToken(saveUser.getId(), saveUser.getRole().name()))
            ));
        }

    }
}
