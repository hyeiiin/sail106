import styled from "styled-components"

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 743e2362dddce835be884131396d442c80cd885e
export const InputBox = styled.input`
  border: 1px solid gray;
  border-radius: 6px;
  width: ${props => props.width || '500px'};
<<<<<<< HEAD
=======
=======
const InputBox = styled.input`
  border: 1px solid gray;
  border-radius: 6px;
  width: 500px;
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
>>>>>>> 743e2362dddce835be884131396d442c80cd885e
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  margin-bottom: 10px;
`;

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.htmlFor}></label>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 743e2362dddce835be884131396d442c80cd885e
      <InputBox
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        width={props.width}
      />
<<<<<<< HEAD
=======
=======
      <InputBox type={props.type} id={props.id} placeholder={props.placeholder} />
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
>>>>>>> 743e2362dddce835be884131396d442c80cd885e
    </div>
  )
}

export default Input