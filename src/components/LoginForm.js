import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log("Printing the form Data");
        console.log(formData);
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler} 
    className='flex flex-col w-full gap-y-4 mt-6'>
        <label >

            <p className='text-richblack-5 text-[0.875] mb-1 leading-[1.375]'>

                Email Address<sup className='text-pink-200'>*</sup>

            </p>

            <input 

                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email address"
                name="email"
                className='bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]'
            />

        </label>

        <label className='w-full relative'>

            <p className='text-richblack-5 text-[0.875] mb-1 leading-[1.375]'>

                Password<sup className='text-pink-200'>*</sup>

            </p>

            <input 

                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
                className='bg-richblack-800 text-richblack-5 w-full p-[12px] rounded-[0.5rem]'
            />

            <span
             className='absolute right-3 top-[38px] cursor-pointer'
             onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>

            <Link to="#">

                <p className='text-sm mt-1 text-blue-100 max-w-max ml-auto'>

                    Forgot Password
                </p>

            </Link>

        </label>

        <button className='bg-yellow-50 font-medium rounded-[8px] text-richblack-900 px-[12px] py-[8px] mt-6'

        >
            Sign In

        </button>

    </form>
  )
}

export default LoginForm
