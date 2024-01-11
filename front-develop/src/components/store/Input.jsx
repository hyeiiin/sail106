import styled from "styled-components"

export const InputBox = styled.input`
  border: 1px solid gray;
  border-radius: 6px;
  width: ${props => props.width || '500px'};
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  margin-bottom: 10px;
`;

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.htmlFor}></label>
      <InputBox
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        width={props.width}
      />
    </div>
  )
}

export default Input