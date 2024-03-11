import React, { useState, useEffect, useRef } from 'react';
import { RegisterContainer, Input, FormContainer } from '../styles/Login.styles'; // Importando estilos
import { Button } from '../styles/Button.styles'; // Importando estilos

function PasswordReset() {
  const [email, setEmail] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [isSending, setIsSending] = useState(false);
  const timerRef = useRef(null); // Referência para o timer

  // Função para lidar com o envio do código
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar que a página recarregue ao enviar o formulário

    // Simular o envio do código (aqui você chamaria sua função para enviar o código)
    setIsSending(true);

    // Iniciar o timeout de 60 segundos
    setCountdown(60);
    clearInterval(timerRef.current); // Limpar o timer atual antes de iniciar um novo
    timerRef.current = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(timerRef.current); // Parar o timer quando chegar a 0
          setIsSending(false); // Atualizar isSending quando o timer parar
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <h2>Esqueci Minha Senha</h2>
      <RegisterContainer>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <Button type="submit" disabled={isSending} style={{ opacity: isSending ? 0.5 : 1 }}>
            Enviar
          </Button>
        </form>
        {isSending && (
          <p>Aguarde {countdown} segundos para enviar novamente.</p>
        )}
      </FormContainer>
        </RegisterContainer>
    </div>
  );
}

export default PasswordReset;
