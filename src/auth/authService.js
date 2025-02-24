
const users = {
    'rick12@gmail.com': 'Aprendiendo1',
  };
  
  export const login = ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (users[email] && users[email] === password) {
          resolve({ email: email });
        } else {
          reject(new Error('usario no autenticado'));
        }
      }, 1000);
    });
  };