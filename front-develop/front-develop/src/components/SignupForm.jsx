import SignupHeader from "./signup/SignupHeader"
import Input from "./store/Input"
import Button from "./store/Button"
import EmailContainer from "./signup/EmailContainer"

const SignupForm = () => {
  return (
    <>
      <SignupHeader />
      <EmailContainer>
        <Input htmlFor="signupEmail" width="340px" id="signupEmail" placeholder="이메일 입력" />
        <Button width="150px" >인증 요청</Button>
      </EmailContainer>
      <Input htmlFor="authNumber" id="authNumber" placeholder="인증번호"/>
      <p>인증 번호가 같아요</p>
      <p>인증번호가 오지 않아요.</p>
      <Button>다음</Button>
    </>
  )
}

export default SignupForm