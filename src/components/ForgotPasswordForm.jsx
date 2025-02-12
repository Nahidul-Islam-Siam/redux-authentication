import { useState } from 'react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to API)
    console.log("Email submitted:", email);
  };

return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">Forgot password?</h2>

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
                        // required
                    />
                </div>

                <button type="submit"  className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-pink-300">
                
                    <a href="/verification-form" className="">    Send Code</a>
                </button>
            </form>
           
             
          
        </div>
    </div>
);
};

export default ForgotPasswordForm;