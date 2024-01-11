import styled from "styled-components";


export const ButtonBox = styled.button`
  border: 1px solid #F28482;
  background-color: #F28482;
  border-radius: 6px;
  width: ${props => props.width || '520px'};
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  color: white;
  font-size: medium;
  font-weight: bold;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const Button = (props) => {
  return (
    <ButtonBox width={props.width} >{props.children}</ButtonBox>
  )
}

export default Button;