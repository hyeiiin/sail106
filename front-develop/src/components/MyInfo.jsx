import styled from "styled-components";
import Button, { ButtonBox } from "./store/Button";

const InfoDiv = styled.div`
  margin: 80px;
  height: 695px;
  width: 565px;
  background-color: #fff8f7;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MyImg = styled.img`
  margin-top: 75px;
  border-radius: 100px;
  height: 268px;
  width: 239px;
`;

const ProfileDiv = styled.div`
  display:flex;
  margin-top: 50px;
  width:100%;
`;

const LeftDiv = styled.div`
  padding-left : 20%;

  flex : 1;
`

const RightDiv = styled.div`
  font-weight: bold;
  flex : 3;
`

const MyButton = styled(ButtonBox)`
  width: 70%;
  border-radius: 30px;

`;

const MyInfo = () => {
  return (
    <InfoDiv>
      <MyImg src="src/assets/googleFavicon.jpg" alt="프로필 사진" />
      <ProfileDiv>
      <LeftDiv>
        <p>NAME</p>
        <p>EMAIL</p>
        <p>NICKNAME</p>
        <p>Birthday</p>
      </LeftDiv>
      <RightDiv>
      <p>Kim Ssa Fy</p>
      <p>Email@google.com</p>
      <p>김싸피</p>
      <p>YYYY-MM-DD</p>
      </RightDiv>
      </ProfileDiv>
      <MyButton>내 정보 수정하기</MyButton>
    </InfoDiv>
  );
};

export default MyInfo;
