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
        <Input htmlFor="loginEmail" type="email" id="loginEmail" placeholder="이메일 입력" />
        <Input htmlFor="loginPw" type="password" id="loginPw" placeholder="비밀번호 입력" />
>>>>>>> ecf721ec8be3afb8901edecd501dd04cdb6de13a
        <Button>로그인</Button>
      </form>
      <AccountManage />
      <SnsManage />
    </>


  )
}

export default LoginForm
