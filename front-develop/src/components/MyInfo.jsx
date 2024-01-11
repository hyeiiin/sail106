import styled from "styled-components";
<<<<<<< HEAD
import Button, { ButtonBox } from "./store/Button";
=======
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90

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

<<<<<<< HEAD
const MyButton = styled(ButtonBox)`
  width: 70%;
  border-radius: 30px;

=======
const Button = styled.button`
  border: 1px solid #E66F75;
  background-color: #E66F75;
  border-radius: 30px;
  width: 70%;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 50px;
  color: white;
  font-size: medium;
  font-weight: bold;
  &:hover {
    background-color: #c94d53;
    cursor: pointer;
  }
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
`;

const MyInfo = () => {
  return (
    <InfoDiv>
      <MyImg src="src/assets/googleFavicon.jpg" alt="프로필 사진" />
      <ProfileDiv>
      <LeftDiv>
        <p>NAME</p>
        <p>EMAIL</p>
<<<<<<< HEAD
        <p>NICKNAME</p>
        <p>Birthday</p>
=======
        <p>AGE</p>
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
      </LeftDiv>
      <RightDiv>
      <p>Kim Ssa Fy</p>
      <p>Email@google.com</p>
<<<<<<< HEAD
      <p>김싸피</p>
      <p>YYYY-MM-DD</p>
      </RightDiv>
      </ProfileDiv>
      <MyButton>내 정보 수정하기</MyButton>
=======
      <p>25</p>
      </RightDiv>
      </ProfileDiv>
      <Button>내 정보 수정하기</Button>
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
    </InfoDiv>
  );
};

export default MyInfo;
