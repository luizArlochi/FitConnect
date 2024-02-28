import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from './Loading';
import { createUser } from '../services/userApi';
import {
  LoginContainer,
  FormContainer,
  Input,
  ButtonContainer,
  LoginButton,
  RegisterButton,
} from '../styles/Login.styles';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await createUser({ email, password });
    setLoading(false);
    setRedirect(true);
  };

  const handleRedirect = (path) => {
    setRedirect(path);
  };

  if (redirect) return <Redirect to={redirect} />;
  return (
    <LoginContainer>
    <FormContainer>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <ButtonContainer>
        <LoginButton type="button" onClick={handleSubmit}>
          Entrar
        </LoginButton>
        <RegisterButton type="button" onClick={() => handleRedirect('/register')}>
          Cadastrar
        </RegisterButton>
      </ButtonContainer>
    </FormContainer>
    {loading && <Loading />}
  </LoginContainer>
  );
}

export default Login;
