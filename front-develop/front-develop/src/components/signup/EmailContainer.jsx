import styled from "styled-components";

const EmailCont = styled.div`
  display: flex;

`;

const EmailContainer = (props) => {
  return (
    <EmailCont>{props.children}</EmailCont>
  )
}

export default EmailContainer;