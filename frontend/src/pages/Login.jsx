import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { loginUser } from '../services/authService';
import { LoginContainer, FormContainer, Input } from '../styles/Login.styles';
import { ButtonContainer, LoginButton, RegisterButton } from '../styles/Button.styles';
import { ClickableText } from '../styles/Message.styles';


function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await loginUser(email, password);
      setLoading(false);
      setRedirect('/home');
    } catch (error) {
      console.error('Erro:', error.message);
      setLoading(false);
      // Lógica para lidar com erros, como exibir uma mensagem de erro para o usuário
    }
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
      <ClickableText onClick={() => handleRedirect('/recovery-code')}> Esqueci minha senha </ClickableText>
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
