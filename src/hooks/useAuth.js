import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser, logOut } from '../redux/features/auth/authSlice';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);

  const login = (userData, token) => {
    dispatch(setUser({ user: userData, token }));
    Cookies.set('auth_token', token, { expires: 7, secure: true, sameSite: 'Strict' });
  };

  const logout = () => {
    dispatch(logOut());
    Cookies.remove('auth_token');
    navigate('/login');
  };

  return {
    user,
    token,
    isAuthenticated: !!token,
    login,
    logout
  };
}; 