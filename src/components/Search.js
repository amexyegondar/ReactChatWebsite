import React, { useContext, useState } from 'react'
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from '../Firebase';
import { AuthContext } from '../context/AuthContext';
function Search() {
  const[username,setUsername]=useState('')
  const[user,setUser]=useState(null)
  const[err,setErr]=useState(false)
  const {currentUser}=useContext(AuthContext)
  const handleSearch=async()=>{
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
try {
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  setUser(doc.data())
});
} catch (error) {
  setErr(true)
}


  }
  const handleKey=(e)=>{
  e.code==='Enter' && handleSearch();
  }
  const handleSelect=async()=>{
  const combinedID=currentUser.uid >user.uid? currentUser.uid +user.uid : user.uid +currentUser.uid
  try {
    const res =await getDocs(db ,'chats',combinedID)
    if(!res.exist()){
      await setDoc(doc,(db,"chats",combinedID),{
        messages:[]
      })
    }
  } catch (error) {
    
  }
  }
  return (
    <div className='search'>
    <div className="searchForm">
      <input type="text" placeholder='Find a friend' onKeyDown={handleKey} onChange={(e)=>setUsername(e.target.value)} />
    </div>
    {err && <span>user not found</span>}

    {user && <div className="userChat" onClick={handleSelect}>
      <img src={user.photoURL} alt="" />
    <div className="userChatInfo">
      <span>{user.displayName}</span>
    </div>
    </div>}
    </div>
  )
}

export default Search
