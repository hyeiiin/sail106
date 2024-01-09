import styled from "styled-components";
import {OuterDiv, Input, Button} from "./LoginForm.jsx";

const MaringInput = styled(Input)`
  margin-top : 10px;
`

const PasswordFindForm = () => {
    return (
      <>
        <OuterDiv>

          <h2>비밀번호 찾기 서비스입니다.</h2>

          <form action="#">
            <div>
        
            <label htmlFor="username">이름</label>
              <MaringInput type="text" id="username" placeholder="실명을 입력해 주세요." />
            </div>
            <div>
              <label htmlFor="loginEmail">이메일</label>
              <MaringInput type="email" id="loginEmail" placeholder="이메일" />
              
            </div>
  
            <Button>인증 메일 보내기</Button>
          </form>
  
        </OuterDiv>
  
      </>
  
    )
  }
  
  export default PasswordFindForm;
