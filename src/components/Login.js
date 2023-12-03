import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:"", password:"",
    })

    const [showPassword, setShowPassword] = useState(false);
    
    function changehandler(e){
        setFormData((prevData) =>{
            return {
                ...prevData,
                [e.target.name] : e.target.value
            }
        })
    }

    function submitHandler(e){
        e.preventDefault();
        const email = formData?.email || '';
        const name = email.split('@')[0];
        toast.success(`Welcome ${name}`);
        console.log(formData);
        navigate("/");
    }

  return (
    <div className="flex justify-center mb-10 mt-10">
        <form onSubmit={submitHandler}
            class="flex flex-col w-[600px]  gap-y-4 mt-20 top-10 bg-slate-200 rounded-md">

            <label class="w-full mt-5">
                <p class="text-[1.2rem] text-richblack-5 mb-1 leading-[1.375rem] ml-5">
                    Email Address
                    <sup class="text-pink-200">*</sup>
                </p>
                <input 
                    required
                    type="email"
                    value={formData.email} 
                    onChange={changehandler}
                    placeholder="Enter your Email.."
                    name="email"
                    class="bg-richblack-800 rounded-[0.75rem] w-11/12 p-[12px] text-richblack-5 ml-5"
                />
            </label>

            <label class="w-full relative">
                <p class="text-[1.2rem] text-richblack-5 mb-1 leading-[1.375rem] ml-5">
                    Password
                <sup class="text-pink-200">*</sup>
                </p>

                <input 
                    required
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password} 
                    onChange={changehandler}
                    placeholder="Enter Password.."
                    name="password"
                    class="bg-richblack-800 rounded-[0.75rem] w-11/12 p-[12px] text-richblack-5 ml-5"
                />
                <span onClick={() => setShowPassword((prev) => !prev)} 
                    class="absolute right-11 top-[40px] cursor-pointer "
                    >
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }
                </span>

                <Link to="#">
                    <p class="text-l mt-1 text-slate-950 max-w-max mr-auto ml-5">
                        Forgot Password?
                    </p>
                </Link>
            </label>

            <button class="bg-slate-600 py-[8px] px-[12px] rounded-[8px] mt-2 font-medium text-lg text-slate-100 w-11/12 ml-5 ">
                Login
            </button>

            <p className="text-center mb-5">Don't have an account? <Link to="/signup" className="text-orange-500"> Sign up</Link></p>
        </form>

    </div>
  )
}
export default Login;
