import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-center">Sign Up to your account</h2>
            <p className="text-gray-500 text-center text-sm mb-6">Please enter your personal data</p>
            
            <div className="space-y-4">
                <input name="name" type="text" placeholder="Enter your name" className="w-full p-2 border rounded" value={formData.name} onChange={handleChange} />
                <input name="email" type="email" placeholder="Enter your email" className="w-full p-2 border rounded" value={formData.email} onChange={handleChange} />
                <input name="phone" type="tel" placeholder="Enter your phone no" className="w-full p-2 border rounded" value={formData.phone} onChange={handleChange} />
                
                <div className="relative">
                    <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full p-2 border rounded"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </button>
                </div>

                <div className="relative">
                    <input
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        className="w-full p-2 border rounded"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                        {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </button>
                </div>

                <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded">Sign Up</button>
                
                <p className="text-center text-sm text-gray-600">
                    Have any account? <a href="/login" className="text-pink-500 font-semibold">Log in</a>
                </p>
            </div>
        </div>
    </div>
);
}
