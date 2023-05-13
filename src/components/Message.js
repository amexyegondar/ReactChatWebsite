import React from 'react'

function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
      <img src="https://images.pexels.com/photos/730055/pexels-photo-730055.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <span>Just now</span>
      </div>
     <div className="messageContent">
      <p>Hello</p>
      <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
     </div>
    </div>
  )
}

export default Message