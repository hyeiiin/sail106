import styled from "styled-components"

<<<<<<< HEAD
export const InputBox = styled.input`
  border: 1px solid gray;
  border-radius: 6px;
  width: ${props => props.width || '500px'};
=======
const InputBox = styled.input`
  border: 1px solid gray;
  border-radius: 6px;
  width: 500px;
>>>>>>> ecf721ec8be3afb8901edecd501dd04cdb6de13a
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
      <InputBox
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        width={props.width}
      />
=======
      <InputBox type={props.type} id={props.id} placeholder={props.placeholder} />
>>>>>>> ecf721ec8be3afb8901edecd501dd04cdb6de13a
    </div>
  )
}

export default Input