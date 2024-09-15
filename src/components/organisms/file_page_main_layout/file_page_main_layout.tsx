import React, { FC } from 'react'
import BoxChat from '../../molecules/box_chat/box_chat'
import './style.scss'
import TypeMessageFilePage from '../../molecules/type_message_file_page/type_message_file_page'
import { FilePageContext } from '../../pages/file_manage_page/file_manage_page';
interface FilePageMainLayoutProps {
  className?:string;
}

const FilePageMainLayout : FC<FilePageMainLayoutProps>= ({className}) => {
  return (
    <div className={`o-file-page-main-layout__container ${className}`}>
      <BoxChat context={FilePageContext}/>
      <TypeMessageFilePage/>
    </div>
  )
}

export default FilePageMainLayout