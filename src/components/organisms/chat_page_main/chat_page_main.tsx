import React, { useContext } from "react";
import "./style.scss";
import TypeMessageRequest from "../../molecules/type_message_request/type_message_request";
import BoxChat from "../../molecules/box_chat/box_chat";
import { ChatPageContext } from "../../pages/chat_page/chat_page";
import Icon from "../../atoms/icon/icon";
const ChatPageMain = () => {
    const {messages} = useContext(ChatPageContext)
  return (
    <div className="o-chat-page-main__container">
    {messages.length ===0 ? <div className="o-chat-page-main__logo-chat">
        <div className="o-chat-page-main__logo-flex">
            <Icon src="images/logo_chat.png" alt="" />
            <p>FPT CHAT</p>
        </div>
    </div>:
      <BoxChat context={ChatPageContext}/>}

      <TypeMessageRequest />
    </div>
  );
};

export default ChatPageMain;
