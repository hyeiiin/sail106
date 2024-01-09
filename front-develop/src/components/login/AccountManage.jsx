import styled from "styled-components";

const Account = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
`;

const ATag = styled.a`
  text-decoration: none;
  color: black;
  margin-left: 15px;
  margin-right: 15px;
  font-weight: bold;
  color: #5d5253;
`;

const AccountManage = (props) => {
  return (
    <Account>
      {props.children}
      <ATag href="#">비밀번호 찾기</ATag>
      <ATag href="#">회원가입</ATag>
    </Account>
  )
}

export default AccountManage;