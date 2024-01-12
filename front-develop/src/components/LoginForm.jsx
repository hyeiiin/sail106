import LoginHeader from "./login/LoginHeader";
import Button from "./store/Button";
import AccountManage from "./login/AccountManage";
import SnsManage from "./login/SnsManage";
import Input from "./store/Input";




const LoginForm = () => {
  return (

    <>
      <LoginHeader />
      <form action="#">
<<<<<<< HEAD
        <Input htmlFor="loginEmail" type="email" id="loginEmail" placeholder="이메일 입력" width="500px" />
        <Input htmlFor="loginPw" type="password" id="loginPw" placeholder="비밀번호 입력" width="500px" />
=======
<<<<<<< HEAD
        <Input htmlFor="loginEmail" type="email" id="loginEmail" placeholder="이메일 입력" width="500px" />
        <Input htmlFor="loginPw" type="password" id="loginPw" placeholder="비밀번호 입력" width="500px" />
=======
        <Input htmlFor="loginEmail" type="email" id="loginEmail" placeholder="이메일 입력" />
        <Input htmlFor="loginPw" type="password" id="loginPw" placeholder="비밀번호 입력" />
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
>>>>>>> 743e2362dddce835be884131396d442c80cd885e
        <Button>로그인</Button>
      </form>
      <AccountManage />
      <SnsManage />
    </>


  )
}

export default LoginForm
