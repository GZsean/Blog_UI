import { keyframes, styled } from "styled-components";

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Spinner = styled.div`
  border: 8px solid #5eba7d; /* 浅绿色 */
  border-top: 8px solid transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;
