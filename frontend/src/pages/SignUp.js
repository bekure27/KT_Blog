import React from 'react'

const SignUp = () => {
  return (
    <div>
         <form className='signup'>
         <h1>Sign Up</h1>
         <input type="text" placeholder='username'/>
         <input type="password" placeholder='password'/>
         <button>Sign Up</button>
        </form>
    </div>
  );
}

export default SignUp