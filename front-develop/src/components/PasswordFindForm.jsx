import styled from "styled-components";

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
  color: white;
  font-size: medium;
  font-weight: bold;
  &:hover {
    background-color: #c94d53;
    cursor: pointer;
  }
`;

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
