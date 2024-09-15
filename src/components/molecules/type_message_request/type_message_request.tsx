import React, { KeyboardEvent, useContext, useState } from 'react'
import './style.scss'
import { Input } from '../../atoms/input/input'
import { ChatPageContext } from '../../pages/chat_page/chat_page'
import Icon from '../../atoms/icon/icon'
const TypeMessageRequest = () => {
    const {setMessages} = useContext(ChatPageContext)
  const [content,setContent] = useState("")
  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleSubmitContent = () => {
    setMessages((prev:any) => [...prev,{content,obj:"user"}])
    setContent("")
  }
  const handleClearContent = () => {
    setMessages([])
    setContent("")
  }
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Ngăn chặn hành vi mặc định
      setMessages((prev:any) => [...prev,{content,obj:"user"}])
      setContent("")
    }
  };
  return (
    
    <div className='m-type-message-request__container'>
        <Icon onClick={handleClearContent} src='images/clean_icon.png' alt=""/>
        <div className='m-type-message-request__input'>
            <Input onKeyDown={handleKeyDown}  className='a-input--grow' value={content} onChange={handleChangeContent} type='text' placeholder='Type here'/>
            <Icon onClick={handleSubmitContent} src='images/send_icon.png' alt=""/>
        </div>

    </div>
  )
}

export default TypeMessageRequest