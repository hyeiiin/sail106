import styled from "styled-components";

const SnsWordContainer = styled.p`
  text-align: center;
  color: #98A2B3;
  padding-top: 5px;
  /* padding-left: 40px; */
  padding-bottom: 3px;
  font-weight: bold;
`;

const ImgContainer = styled.div`
  text-align: center;
  padding-bottom: 40px;
`;

const LogoImg = styled.img`
  border-radius: 20px;
  width: 40px;
  height: 40px;
  margin-left: 40px;
`;

const DashSpan = styled.span`
  margin-right: 10px;
  margin-left: 10px;
  color: #D0D5DD;
`;

const SnsManage = () => {
  return (
    <>
      <SnsWordContainer><DashSpan>—————————</DashSpan> SNS 계정으로 로그인 <DashSpan>—————————</DashSpan></SnsWordContainer>
      <ImgContainer>
        <a href="#"><LogoImg src="src/assets/naverFavicon.jpg" alt="네이버 로고" /></a>
        <a href="#"><LogoImg src="src/assets/kakaoFavicon.png" alt="카카오 로고" /></a>
        <a href="#"><LogoImg src="src/assets/googleFavicon.jpg" alt="구글 로고" /></a>
      </ImgContainer>
    </>
    
  )
}

export default SnsManage;