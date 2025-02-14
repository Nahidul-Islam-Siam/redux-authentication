export const getUserInfo = () => {
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
};

export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  return !!token;
}; 