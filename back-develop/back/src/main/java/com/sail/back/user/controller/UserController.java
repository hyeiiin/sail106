package com.sail.back.user.controller;

import com.sail.back.user.model.dto.request.UserJoinRequest;
import com.sail.back.user.model.dto.response.BaseResponseBody;
import com.sail.back.user.model.entity.User;
import com.sail.back.user.model.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/users")
@Slf4j
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/join")
    @ApiOperation(value = "회원 가입", notes = "<strong>아이디와 패스워드</strong>를 통해 회원가입 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> register(
            @RequestBody @ApiParam(value="회원가입 정보", required = true) UserJoinRequest userJoinRequest) {

        //임의로 리턴된 User 인스턴스. 현재 코드는 회원 가입 성공 여부만 판단하기 때문에 굳이 Insert 된 유저 정보를 응답하지 않음.
        User user = userService.joinUser(userJoinRequest);

        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
    }



}
