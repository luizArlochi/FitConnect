import styled from "styled-components";

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
  background-color: #9FC12A;
  color: black;
  margin-right: 5px;
`;

export const RegisterButton = styled(Button)`
  background-color: #FF9924;
  color: black;
  margin-left: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
`;

export const CheckboxText = styled.span`
  font-size: 20px;
`;