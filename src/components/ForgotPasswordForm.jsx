import { useState } from 'react';
import { useSendForgetPasswordOTPMutation } from '../redux/api/auth/authApi';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [sendOtp, { isLoading }] = useSendForgetPasswordOTPMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await sendOtp({ email });
      if ('data' in response) {
        setMessage('OTP has been sent to your email');
        setEmail('');
  
      } else if ('error' in response) {
        setMessage(response.error?.data?.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
        console.log(error);
        
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password?</h2>

        {message && (
          <div className={`mb-4 p-3 rounded ${message.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Enter your email" 
              required
              disabled={isLoading}
            />
          </div>

          <button 
            type="submit" 
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-300 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send OTP'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;