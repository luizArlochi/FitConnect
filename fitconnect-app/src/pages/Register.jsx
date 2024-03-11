import React, { useState } from 'react';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../services/authService';
import {
    LoginContainer,
    FormContainer,
    Input,
} from '../styles/Login.styles';
import { ButtonContainer, RegisterButton, CheckboxContainer, CheckboxInput, CheckboxText } from '../styles/Button.styles';
import { AlertMessage } from '../styles/Message.styles';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isProfessor, setIsProfessor] = useState(false); // Novo estado para verificar se o usuário é um aluno
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            if (password === confirmPassword) {
                await registerUser(name, email, password, isProfessor); // Passar isStudent para a função de registro
                setLoading(false);
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setRedirect(true);
                }, 5000);
            } else {
                setPasswordsMatch(false);
            }
        } catch (error) {
            console.error('Erro:', error.message);
            setLoading(false);
            // Lógica para lidar com erros, como exibir uma mensagem de erro para o usuário
        }
    };

    if (redirect) return <Redirect to="/login" />;

    return (
        <LoginContainer>
            <FormContainer>
                <Input 
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                />
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
                <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={({ target }) => setConfirmPassword(target.value)}
                />
                <CheckboxContainer>
                  <CheckboxInput
                    type="checkbox"
                    checked={isProfessor}
                    onChange={() => setIsProfessor(!isProfessor)}
                  />
                  <CheckboxText>Sou um aluno</CheckboxText>
                </CheckboxContainer>
                {!passwordsMatch && (
                    <AlertMessage>
                        As senhas não correspondem. Por favor, tente novamente.
                    </AlertMessage>
                )}
                <ButtonContainer>
                    <RegisterButton type="button" onClick={handleSubmit}>
                        Cadastrar
                    </RegisterButton>
                </ButtonContainer>
            </FormContainer>
            {loading && <Loading />}
            {showSuccessMessage && (
                <AlertMessage>
                    Cadastro realizado com sucesso! Redirecionando para a página de login...
                </AlertMessage>
            )}
        </LoginContainer>
    )
}

export default Register;
