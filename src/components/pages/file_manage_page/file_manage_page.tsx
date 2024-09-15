import React, { createContext, useEffect, useRef, useState } from "react";
import "./style.scss";
import FilePageHeader from "../../organisms/file_page_header/file_page_header";
import NavColumn from "../../organisms/nav-column/nav-column";
import FilePageMainLayout from "../../organisms/file_page_main_layout/file_page_main_layout";
import ManageFile from "../../organisms/mange-file/manage-file";
export const FilePageContext = createContext<any>(null);
const FileManagePage = () => {
  const [messages, setMessages] = useState([
    { content: "Helo AI", obj: "user" },
    { content: "May can I help you?", obj: "ai" },
  ]);
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const navRef = useRef<any>(null);
  const menuRef = useRef<any>(null);
  const searchRef = useRef<any>(null);
  const searchIconRef = useRef<any>(null);
  const [naviagteIndex, setNavigateIndex] = useState(0);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      console.log(navRef);
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenu(false); // Đóng menu nếu nhấn ngoài
      }
      console.log(search);
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearch(false);

        // Đóng menu nếu nhấn ngoài
      }
    };

    // Thêm sự kiện 'click' khi component được mount
    if (menu || search) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener khi component bị unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menu, search]);
  return (
    <FilePageContext.Provider
      value={{
        search,
        setSearch,
        navRef,
        menu,
        setMenu,
        menuRef,
        searchRef,
        searchIconRef,
        setNavigateIndex,
        naviagteIndex,
        messages,
        setMessages
      }}
    >
      <div className="p-file-manage__container">
        <FilePageHeader />
        <div className="p-file-manage__nav-main">
          <NavColumn className="" />
          {naviagteIndex === 0 && (
            <FilePageMainLayout className="o-file-page-main-layout--grow-8" />
          )}
          {naviagteIndex === 1 && (
            <ManageFile className="o-manage-file--grow-8" />
          )}
          {naviagteIndex === 2 && (
            <FilePageMainLayout className="o-file-page-main-layout--grow-1" />
          )}
          {naviagteIndex === 3 && (
            <FilePageMainLayout className="o-file-page-main-layout--grow-1" />
          )}
        </div>
      </div>
    </FilePageContext.Provider>
  );
};

export default FileManagePage;
