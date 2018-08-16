export const startSession = user => {
  const sessionKey = btoa(`user=${user}`);
  localStorage.setItem('sessionKey', sessionKey);
  return localStorage.getItem('sessionKey');
};

export const deleteSession = () => localStorage.removeItem('sessionKey');
