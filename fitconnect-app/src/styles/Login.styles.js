import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 9px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.primary ? '#007bff' : '#28a745'};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: ${props => props.primary ? '0' : '10px'};
`;

export const LoginButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  margin-right: 5px;
`;

export const RegisterButton = styled(Button)`
  background-color: #28a745;
  color: #fff;
  margin-left: 5px;
`;
