import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { useSingupMutation } from "../redux/api/auth/authApi";


const SignUpForm = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [singup, { isLoading, error }] = useSingupMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const passwordToggle = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    
    const onSubmit = async (data) => {
        try {
            const res = await singup(data).unwrap();
            console.log("Registration successful!", res);
    
            toast.success("Registration Successfully");
    
            // Navigate to verification form with email as a URL parameter
            navigate(`/verification-form/${data.email}`);
        } catch (err) {
            console.error("Registration failed:", err);
            toast.error(err?.data?.message || "Signup failed, please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white px-14 py-10 rounded-lg shadow-md w-full max-w-xl">
                <h2 className="text-2xl font-semibold text-center mb-4">Sign Up to Your Account</h2>
                <p className="text-center text-gray-500 mb-6">Please Enter Your Personal Data</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            {...register("fullName", { required: "Full name is required" })}
                            className="mt-1 w-full p-2 border rounded focus:ring focus:ring-pink-300"
                            placeholder="Enter your name"
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email format" } })}
                            className="mt-1 w-full p-2 border rounded focus:ring focus:ring-pink-300"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            {...register("phone", { required: "Phone number is required" })}
                            className="mt-1 w-full p-2 border rounded focus:ring focus:ring-pink-300"
                            placeholder="Enter your phone no"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters" } })}
                            className="mt-1 w-full p-2 border rounded focus:ring focus:ring-pink-300"
                            placeholder="********"
                        />
                        <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-9 text-gray-500">
                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </button>
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            {...register("confirmPassword", { required: "Confirm Password is required" })}
                            className="mt-1 w-full p-2 border rounded focus:ring focus:ring-pink-300"
                            placeholder="********"
                        />
                        <button type="button" onClick={passwordToggle} className="absolute right-3 top-9 text-gray-500">
                            {showConfirmPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </button>
                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-4 bg-[#ED1E79] text-white py-2 rounded hover:bg-pink-600"
                            disabled={isLoading}
                        >
                            {isLoading ? "Signing Up..." : "Sign Up"}
                        </button>
                    </div>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Have an account?
                    <Link to="/login" className="text-pink-500 hover:underline"> Log in</Link>
                </p>
            </div>
        </div>
    );
}


export default SignUpForm;