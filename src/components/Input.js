import React from 'react'
import img from '../image/img.png'
import attach from '../image/attach.png'
function Input() {
  return (
    <div className='input'>
    <input type="text"  placeholder='Type something...'/>
     <div className="send">
     <img src={attach} alt="" />
      <input type="file" name="" id="file" style={{display:'none'
      }} />
      <label htmlFor="file">
        <img src={img} alt="" />
      </label>
      <button>Send</button>
     </div>
    </div>
  )
}

export default Input