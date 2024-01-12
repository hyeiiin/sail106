import styled from "styled-components";

const StyleCard = styled.div`
  padding-top: 80px;
  padding-left: 40px;
  width: 520px;
`;

const Card = (props) => {
  return (
    <StyleCard>
      {props.children}
    </StyleCard>
  )
}

export default Card;