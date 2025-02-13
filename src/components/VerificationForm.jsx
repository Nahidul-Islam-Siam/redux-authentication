import { useForm } from 'react-hook-form';
import  { useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useResendVerificationCodeMutation, useVerifyOTPMutation } from '../redux/api/auth/authApi';
import { toast } from 'react-toastify';

const VerificationForm = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors }, setFocus } = useForm({
    defaultValues: { code: ['', '', '', ''] }
  });

  const [verifyOTP, { isLoading }] = useVerifyOTPMutation();
  const [resendVerificationCode] = useResendVerificationCodeMutation();

  const navigate = useNavigate();
  const inputsRef = useRef([]);

  const codeValues = watch("code") || ['','','',''];
  const param = useParams();
  const email = param.email;
   console.log("codeValues: ",codeValues)

  console.log(email);
  const handleChange = (index, event) => {
    const value = event.target.value;
    if (!/^\d?$/.test(value)) return; // Only allow single digits

    const newCode = [...codeValues];
    newCode[index] = value;
    setValue("code", newCode);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !codeValues[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const onSubmit = async (data) => {
    const code = data.code.join('');
    console.log('Verification Code:', code);

    try {
      const result = await verifyOTP({ email, code }).unwrap();
      console.log("Verified Res", result);
      toast.success("OTP verified successfully!");
      navigate('/dashboard'); // Adjust navigation as needed
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || "Invalid OTP, please try again.");
    }
  };

  const onResend = async () => {
    try {
      await resendVerificationCode({ email }).unwrap();
      toast.success("Verification code sent to your email!");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || "Failed to resend OTP. Please try again.");
    }
  };

  useEffect(() => {
    setFocus("code.0");
  }, [setFocus]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Verification Code</h2>
        <p className="text-gray-600 mb-6 text-center">
          We sent a reset link to your {param?.email}.<br />
          Enter the 4-digit code mentioned in the email.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center space-x-4 mb-6">
            {codeValues.map((digit, index) => (
              <input
                key={index}
                type="text"
                {...register(`code.${index}`, { required: true })}
                value={digit}
                onChange={(event) => handleChange(index, event)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                className="border border-gray-300 rounded-md px-4 py-2 w-14 h-14 text-center text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength={1}
                ref={(el) => (inputsRef.current[index] = el)}
                autoFocus={index === 0}
              />
            ))}
          </div>

          {errors.code && <p className="text-red-500 text-center">Please enter all 4 digits.</p>}

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-300"
            disabled={codeValues.includes('')}
          >
            {isLoading ? "Verifying..." : "Verify Code"}
          </button>

          <p className="mt-4 text-center text-gray-600">
            Didn&lsquo;t receive the email?{' '}
            <button
              type="button"
              className="text-green-500 hover:underline"
              onClick={onResend}
            >
              Resend
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default VerificationForm;
