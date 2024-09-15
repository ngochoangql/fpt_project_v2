import React, { Context, FC, useContext, useEffect, useRef } from "react";
import "./style.scss";
import { FilePageContext } from "../../pages/file_manage_page/file_manage_page";

interface BoxChatProps {
    context: any;
}

const BoxChat : FC<BoxChatProps>= ({context}) => {
  const { messages } = useContext<any>(context);
  const chatBoxRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className="m-box-chat__container">
      <div ref={chatBoxRef} className="m-box-chat__content">
        {messages.map((mess: any, index: any) => (
          <div
          key={index}
            className={`m-box-chat__content--${
              mess.obj === "user" ? "user" : "ai"
            }`}
          >
            <p>{mess.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxChat;
