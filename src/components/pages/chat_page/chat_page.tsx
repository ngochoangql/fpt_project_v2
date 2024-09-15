import React, { createContext, useState } from "react";
import ChatPageHeader from "../../organisms/chat_page_header/chat_page_header";
import "./style.scss";
import ChatPageMain from "../../organisms/chat_page_main/chat_page_main";
export const ChatPageContext = createContext<any>(null);
const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  return (
    <ChatPageContext.Provider value={{ setMessages, messages }}>
      <div className="p-chat-page__container">
        <header className="p-chat-page__header">
          <ChatPageHeader />
        </header>
        <main className="p-chat-page__main">
          <ChatPageMain />
        </main>
      </div>
    </ChatPageContext.Provider>
  );
};

export default ChatPage;
