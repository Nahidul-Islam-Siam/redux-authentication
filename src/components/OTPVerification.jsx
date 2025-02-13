import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useVerifyOTPMutation } from '../redux/api/auth/authApi';

const OTPVerification = () => {
  const navigate = useNavigate();
  const { email } = useParams();
  const [verifyOTP, { isLoading }] = useVerifyOTPMutation();
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await verifyOTP({
        email: decodeURIComponent(email),
        code: data.otp
      }).unwrap();
      
      toast.success('OTP verified successfully!');
      navigate(`/reset-password/${email}`); // Include email in next route too
    } catch (error) {
      toast.error(error.data?.message || 'Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verify OTP
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Enter the OTP sent to {decodeURIComponent(email)}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              className={`appearance-none rounded-md relative block w-full px-3 py-2 border ${
                errors.otp ? 'border-red-500' : 'border-gray-300'
              } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              placeholder="Enter OTP"
              {...register('otp', {
                required: 'OTP is required',
                minLength: {
                  value: 6,
                  message: 'OTP must be 6 characters'
                }
              })}
            />
            {errors.otp && (
              <p className="mt-1 text-sm text-red-500">{errors.otp.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isLoading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification; 