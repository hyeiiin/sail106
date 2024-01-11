import styled from "styled-components";

<<<<<<< HEAD

export const ButtonBox = styled.button`
  border: 1px solid #F28482;
  background-color: #F28482;
  border-radius: 6px;
  width: ${props => props.width || '520px'};
=======
const ButtonBox = styled.button`
  border: 1px solid #E66F75;
  background-color: #E66F75;
  border-radius: 6px;
  width: 520px;
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  color: white;
  font-size: medium;
  font-weight: bold;
  &:hover {
<<<<<<< HEAD
    opacity: 0.7;
=======
    background-color: #c94d53;
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
    cursor: pointer;
  }
`;

<<<<<<< HEAD
const Button = (props) => {
  return (
    <ButtonBox width={props.width} >{props.children}</ButtonBox>
=======
const Button = () => {
  return (
    <ButtonBox>로그인</ButtonBox>
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
  )
}

export default Button;