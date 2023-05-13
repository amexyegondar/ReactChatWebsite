import React from 'react'
import '../style.scss'
import { useNavigate,Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase'
function Login() {
  const navigate=useNavigate()
  const handlesubmit = async (e)=>{
    e.preventDefault()
    const email =e.target[0].value
    const password=e.target[1].value
    try {
      await signInWithEmailAndPassword(auth,email,password)
      console.log('logged in')
      navigate('/')
    } catch (error) {
      
    }
    
    
    }
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
    <span className="logo">Mike Chat</span>
    <span className="title">Login</span>
    <form onSubmit={handlesubmit}>
      
      <input type="email" placeholder='email'/>
       <input type="password" placeholder='password' />
       <button>Sign in</button>
    </form>
    <p>You don't have an account?<Link to='/register'>Register</Link> </p>
    </div>
  
      </div>
  )
}

export default Login