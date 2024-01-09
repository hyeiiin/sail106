import styled from "styled-components";
import { Link } from "react-router-dom";

import LoginHeader from "./login/LoginHeader";
import LoginButton from "./login/LoginButton";
import AccountManage from "./login/AccountManage";
import SnsManage from "./login/SnsManage";

const OuterDiv = styled.div`
  padding-top: 80px;
  padding-left: 40px;
  width: 520px;
`;

const Input = styled.input`
  border: 1px solid gray;
  border-radius: 6px;
  width: 500px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  margin-bottom: 10px;
`;



const LoginForm = () => {
  return (


    <OuterDiv>
      <LoginHeader />

      <form action="#">
        <div>
          <label htmlFor="loginEmail"></label>
          <Input type="email" id="loginEmail" placeholder="이메일 입력" />
        </div>
        <div>
          <label htmlFor="loginPw"></label>
          <Input type="password" id="loginPw" placeholder="비밀번호 입력" />
        </div>

        <LoginButton>로그인</LoginButton>
      </form>

      <AccountManage />
      <SnsManage />

    </OuterDiv>

  )
}

export default LoginForm
export {OuterDiv, Input, Button}