import React from 'react'
import Add from '../image/add.png'
import Cam from '../image/camera.png'
import More from '../image/more.png'
import Messages from './Messages'
import Input from './Input'
function Chat() {
  return (
    <div className='chat'>
    <div className="chatInfo">
      <span>Haile</span>
      <div className="chatIcons">
        <img src={Add} alt="" />
        <img src={Cam} alt="" />
        <img src={More} alt="" />
      </div>
    
    </div>
    <Messages/>
    <Input/>
    </div>
  )
}

export default Chat