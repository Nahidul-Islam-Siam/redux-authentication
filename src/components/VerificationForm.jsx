import  { useState } from 'react';

const VerificationForm = () => {
  const [code, setCode] = useState(['', '', '', '', '']);

  const handleChange = (index, event) => {
    const newCode = [...code];
    newCode[index] = event.target.value;
    setCode(newCode);

    // Focus on the next input if a number is entered
    if (event.target.value && index < 4) {
      const nextInput = event.target.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredCode = code.join(''); // Combine the code digits
    console.log("Entered Code:", enteredCode);
    // Handle form submission here (e.g., send data to API)
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Verification code</h2>
        <p className="text-gray-600 mb-6 text-center">
          We sent a reset link to contact@ascode..com <br />
          enter 5 digit code that is mentioned in the email
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex space-x-4 mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                type="number"
                maxLength="1"
                value={digit}
                onChange={(event) => handleChange(index, event)}
                className="border border-gray-300 rounded-md px-4 py-2 w-16 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                ref={(input) => {
                  if (index === 0) {
                    input && input.focus(); // Focus on the first input on mount
                  }
                }}
              />
            ))}
          </div>

          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
           <a href="/set-new-password-form"> Verify Code</a>
          </button>

          <p className="mt-4 text-center text-gray-600">
            You have not received the email? <a href="#" className="text-green-500 hover:underline">Resend</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default VerificationForm;