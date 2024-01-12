import styled from "styled-components";

const LoginBox = styled.h1`
  text-align: center;
  padding-bottom: 80px;

  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  letter-spacing: -1.2px;
`;

const LoginHeader = () => {
  return (
    <LoginBox>Flowering</LoginBox>
  )
};

export default LoginHeader;