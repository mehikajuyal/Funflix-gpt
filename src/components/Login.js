import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSigninForm, setisSigninForm] = useState(true);
    const toggleSignInForm = () => {
        setisSigninForm(!isSigninForm);
    }

    return (
        <div>
            <Header />
            <div>
                <img className='opacity-90 absolute'
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_small.jpg" alt="logo"></img>
            </div>
            <div className='absolute w-4/12 bg-black text-white p-8 my-32 mx-auto left-0 right-0 bg-opacity-70 rounded-2xl'>
                <form className='mx-10'>
                    <h1 className='text-3xl my-2 font-bold w-full'>{isSigninForm ? "Sign In" : "Sign Up"}</h1>
                    {
                        !isSigninForm && <input className='p-4 my-2 w-full rounded-lg bg-transparent border-2 border-gray-600' type="text" placeholder='Full Name'></input>

                    }
                    <input className='p-4 my-2 w-full rounded-lg bg-transparent border-2 border-gray-600' type="text" placeholder='Email or mobile number'></input>
                    <input className='p-4 my-2 w-full rounded-lg bg-transparent border-2 border-gray-600' type="password" placeholder='Password'></input>
                    <button className='p-2 my-2 w-full bg-red-700 rounded-lg'>{isSigninForm ? "Sign In" : "Sign Up"}</button>


                    <h3 className='mt-2 mb-12 cursor-pointer' onClick={toggleSignInForm}>{isSigninForm ? "New to Netflix? Sign up now." : "Already a User. Sign in now"}</h3>
                </form>

            </div>
        </div >
    )
}

export default Login