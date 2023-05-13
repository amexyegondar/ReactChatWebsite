import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../Firebase'
import { AuthContext } from '../context/AuthContext'
function Navbar() {
  const {currentUser}=useContext(AuthContext)
  console.log(currentUser.photoURL)
  return (
    <div className='navbar'>
      <span className="logo">Mike Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar