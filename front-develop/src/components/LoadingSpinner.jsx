import styled, {keyframes} from "styled-components";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import ClipLoader from "react-spinners/ClipLoader"; //설치한 cliploader을 import한다
>>>>>>> b0e00f97f7c0f001e74ae9e861cc39bab843ef90
>>>>>>> 743e2362dddce835be884131396d442c80cd885e

const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #c94d53;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;


const LoadingSpinner = () => {
  return (
    <SpinnerOverlay>
      <Spinner></Spinner>
    </SpinnerOverlay>
  );
};

export default LoadingSpinner;
