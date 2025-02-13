import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useLoginMutation } from '../redux/api/auth/authApi';
import { useState } from 'react';
import { verifyToken } from '../token/token';
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/feature/authSlices/authSlice';
import Cookies from "js-cookie";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading, error }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const result = await login(data).unwrap();
      const token = result.data.accessToken;

      const user = verifyToken(token);
      dispatch(setUser({ user, token }));

      console.log("Login User", user);

      Cookies.set('auth_token', token, { expires: 7, secure: true, sameSite: 'Strict' });

      console.log(result.data.accessToken);
      toast.success("User Logged in Successfully!");

      navigate('/dashboard'); // ✅ Fixed navigation

    } catch (err) {
      toast.error(err.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Log in to your account</h2>
        <p className="text-gray-600 mb-6 text-center">Please enter your email and password to continue.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                placeholder="Enter your password"
                {...register('password', { required: 'Password is required' })}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 flex items-center"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FaEye className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaEyeSlash className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" {...register('rememberMe')} />
              <label htmlFor="rememberMe" className="text-gray-700">Remember me</label>
            </div>
            <div className="flex items-center">
              <a href="/forgot-password" className="text-pink-500 hover:underline text-sm">
                Forgot password?
              </a>
            </div>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-300"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </div>

          {error && <p className="text-red-500 text-center">{error?.data?.message || "Login failed"}</p>}

          <div className="text-center">
            <p className="text-gray-600">
              Don&apos;t have an account? <a href="/" className="text-pink-500 hover:underline">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
