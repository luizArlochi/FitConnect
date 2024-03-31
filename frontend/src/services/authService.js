import axios from 'axios';

const backendURL = 'http://localhost:8000';

export const loginUser = async (email, password) => {
    console.log(backendURL)
  try {
    const response = await axios.post(`${backendURL}/login/`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Login Error');
  }
};

export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${backendURL}/register/`, { name, email, password });
    return response.data;
  } catch (error) {
    throw new Error('Register Error');
  }
};

// export const sendRecoveryCode = async (email) => {
//     try {
//         const response = await axios.post(`${backendURL}/recovery-code/`, { email });
//         return response.data;
//     } catch (error) {
//         throw new Error('Erro ao enviar código de recuperação');
//     }
// };

// export const resetPassword = async (password, code) => {
//     try {
//         const response = await axios.post(`${backendURL}/password-reset/`, { password, code });
//         return response.data;
//     } catch (error) {
//         throw new Error('Erro ao resetar senha');
//     }
// };