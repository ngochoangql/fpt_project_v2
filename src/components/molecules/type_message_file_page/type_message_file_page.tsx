import React, { KeyboardEvent, useContext, useState } from 'react'
import { Input } from '../../atoms/input/input'
import './style.scss'
import IconTemplate1 from '../icon-template1/icon-template-1'
import { FilePageContext } from '../../pages/file_manage_page/file_manage_page'
const TypeMessageFilePage = () => {
  const {setMessages} = useContext(FilePageContext)
  const [content,setContent] = useState("")
  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleSubmitContent = () => {
    setMessages((prev:any) => [...prev,{content,obj:"user"}])
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
    <div className='m-type-message-file-page__container'>
        <Input type='text' value={content} placeholder='Type here' className='a-input--grow' onChange={handleChangeContent} onKeyDown={handleKeyDown}/>
        <IconTemplate1 sendClick={handleSubmitContent} />
    </div>
  )
}

export default TypeMessageFilePage