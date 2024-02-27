import React from 'react'

function SignUpContainer() {
    return (
        <div className='SignUpContainer flex justify-between mb-10 mt-10'>
            <p className='SignupText text text-3xl w-2/5 ml-14 text-gray-500'>Sign up and get exclusive special deals</p>
            <div className="InputBox">
                <input className='SignUpInput w-64 h-11 outline-sky-500' type="text" />
                <button className='SignUpBtn bg-blue-600 text-white text-sm font-thin h-12 w-24 rounded-r-xl '>Sign Up</button>
            </div>
        </div>
    )
}

export default SignUpContainer