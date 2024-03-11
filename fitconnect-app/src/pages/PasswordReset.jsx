import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { FormContainer, Input, RegisterContainer } from "../styles/Login.styles";
import { Button } from "../styles/Button.styles";
import { AlertMessage } from "../styles/Message.styles";
// import { resetPassword } from "../services/authService";

function PasswordReset() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true); // Estado para verificar se as senhas coincidem

    const handleSubmit = async () => {
        // Verificar se as senhas coincidem
        if (password === confirmPassword) {
            // Resetar a senha e definir setPasswordResetSuccess como true se a senha for resetada com sucesso
            // await resetPassword(password);
            setPasswordResetSuccess(true);
        } else {
            // Senhas não coincidem, definir passwordsMatch como falso para exibir a mensagem de erro
            setPasswordsMatch(false);
        }
    };

    const handleRedirect = (path) => {
        setRedirect(path);
    };

    if (redirect) return <Redirect to={redirect} />;
    if (passwordResetSuccess) {
        return (
            <FormContainer>
                <AlertMessage>Sua senha foi recadastrada com sucesso! Clique no botão Voltar para fazer login.</AlertMessage>
                <Button type="button" onClick={() => handleRedirect('/login')}>
                    Voltar
                </Button>
            </FormContainer>
        );
    }

    return (
        <RegisterContainer>
        <FormContainer>
            <Input
                type="password"
                placeholder="Nova senha"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
            />
            <Input
                type="password"
                placeholder="Confirme a nova senha"
                value={confirmPassword}
                onChange={({ target }) => setConfirmPassword(target.value)}
            />
            {!passwordsMatch && (
                <AlertMessage>As senhas não coincidem. Por favor, verifique e tente novamente.</AlertMessage>
            )}
            <Button type="button" onClick={handleSubmit}>
                Enviar
            </Button>
        </FormContainer>
        </RegisterContainer>
    )
}

export default PasswordReset;
