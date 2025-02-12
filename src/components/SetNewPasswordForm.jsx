import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SetNewPasswordForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to API)
    console.log("New Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Set a new password</h2>
        <p className="text-gray-600 mb-6 text-center">
          Create a new password. Ensure it differs from previous ones for security.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                required
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
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm New Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-0 px-3 flex items-center"
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? (
                  <FaEye className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaEyeSlash className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetNewPasswordForm;
