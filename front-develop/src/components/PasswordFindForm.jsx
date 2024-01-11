import styled from "styled-components";
<<<<<<< HEAD
import { ButtonBox} from "./store/Button";
=======

>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
const OuterDiv = styled.div`
  padding-top: 80px;
  padding-left: 40px;
  width: 520px;
`;

const Input = styled.input`
  border: 1px solid gray;
<<<<<<< HEAD
  border-radius: 8px;
  width: 80%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const VerificationInput = styled(Input)`
  width : 71.5%;
`

const Button = styled.button`
  border: 1px solid #e66f75;
  background-color: #e66f75;
  border-radius: 8px;
  width : 50%;
  padding-top: 13px;
  padding-bottom: 13px;
=======
  border-radius: 6px;
  width: 500px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  margin-top : 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  border: 1px solid #E66F75;
  background-color: #E66F75;
  border-radius: 6px;
  width: 520px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 10px;
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
  color: white;
  font-size: medium;
  font-weight: bold;
  &:hover {
    background-color: #c94d53;
    cursor: pointer;
  }
`;

<<<<<<< HEAD
const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const LeftDiv = styled.span`
  width: 50%;
`;

const RightDiv = styled.span`
  width: 50%;
`;

const NotReceived = styled.div`
  justify-content : center;
`

const MyButton = styled(ButtonBox)`
  width: 70%;
  border-radius: 30px;
  margin-top : 30px;
`;

const PasswordFindForm = () => {
  return (
    <>
      <OuterDiv>
        <h2>가입 시 입력한 이메일 주소를 알려주세요.</h2>
        <p>입력하신 주소로 인증번호가 전송됩니다.</p>

        <form action="#">
          <ProfileDiv>
            <LeftDiv>
                <Input type="email" id="loginEmail" placeholder="이메일 입력" />
            </LeftDiv>
            <RightDiv>
              <Button>인증 요청</Button>
            </RightDiv>
          </ProfileDiv>
        </form>
        
        <VerificationInput placeholder="인증번호" />
        <p>√ 인증 번호가 같아요</p>
        <NotReceived>인증번호가 오지 않아요.</NotReceived>
        <MyButton>비밀번호 찾기</MyButton>
      </OuterDiv>
    </>
  );
};

export default PasswordFindForm;

=======
const PasswordFindForm = () => {
    return (
      <>
        <OuterDiv>

          <h2>비밀번호 찾기 서비스입니다.</h2>

          <form action="#">
            <div>
        
            <label htmlFor="username">이름</label>
              <Input type="text" id="username" placeholder="실명을 입력해 주세요." />
            </div>
            <div>
              <label htmlFor="loginEmail">이메일</label>
              <Input type="email" id="loginEmail" placeholder="이메일" />
              
            </div>
  
            <Button>인증 메일 보내기</Button>
          </form>
  
        </OuterDiv>
  
      </>
  
    )
  }
  
  export default PasswordFindForm;
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
