import React, { useState } from 'react'
import '../style.scss'
import Add from '../image/download.png'
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth ,storage,db} from '../Firebase';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {  doc, setDoc } from "firebase/firestore";
import {Link, useNavigate} from 'react-router-dom'
function Register() {
  const navigate=useNavigate()
// const[displayName,setDisplayname]=useState('')
// const[email,setEmail]=useState('')
// const[photoURL,setPhotoURL]=useState('')
const[uid,setUid]=useState('')
// const [url,setUrl]=useState('')
const[err,setErr]=useState(false)

  const handlesubmit = async (e)=>{
  e.preventDefault()
  const displayName=e.target[0].value
  const email =e.target[1].value
  const password=e.target[2].value
  const file=e.target[3].files[0]
  // setDisplayname(displayName)
  // setEmail(email)
  
  try{
    const res= await createUserWithEmailAndPassword(auth, email, password)

     setUid(res.user.uid)
     
   console.log(res)
    const storageRef = ref(storage, displayName);
    
    const uploadTask = uploadBytesResumable(storageRef, file);
    console.log('It is working')
  
  uploadTask.on('state_changed',
  (snapshot) => {
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      // setPhotoURL(downloadURL)
    await updateProfile(res.user,{
    displayName:displayName,
    photoURL:downloadURL,
   
  }); 
  console.log(res.user.photoURL)
  await setDoc(doc(db, "users", res.user.uid), {
    displayName:displayName,
    email: email,
    photoURL: downloadURL,
    uid:uid,
  });
  await setDoc(doc(db,"userChat",res.user.uid),{})
  navigate('/')
     });
  }
);
  }
 catch(err){
 setErr(true)
 }
  }
  // const submitUser = async () => {
   
  //   const dbref = collection(db, "users");
  //   console.log(uid)
  //   console.log(photoURL)
  //   await setDoc(doc(db, "users", uid), {
  //     displayName:displayName,
  //     email: email,
  //     photoURL: photoURL,
  //     uid:uid,
  //   });
    
  // };
  
  return (
    <div className='formContainer'>
    <div className='formWrapper'>
    <span className="logo">Mike Chat</span>
    <span className="title">Register</span>
    <form onSubmit={handlesubmit}>
      <input type="text" placeholder='display name' />
      <input type="email" placeholder='email'/>
       <input type="password" placeholder='password' />
       <input style={{display:'none'}}type="file" name="" id="file" />
       <label htmlFor="file">
        <img src={Add} alt="Add" />
        <span>Add an avatar</span>
       </label>
       <button >Sign Up</button>
       {err &&  <span style={{color:'red'}}>Something went wrong</span>}
    </form>
    <p>You do have an account? <Link to='/login'>Login</Link></p>
    {/* <p>{url}</p> */}
    </div>
    
      
      </div>
  )
}

export default Register