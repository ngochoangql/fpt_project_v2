import React, { useContext } from "react";
import Search from "../../molecules/search/search";
import "./style.scss";
import { FilePageContext } from "../../pages/file_manage_page/file_manage_page";
const FilePageHeader = () => {
  const { search, setSearch, menu, setMenu, menuRef, searchIconRef } =
    useContext(FilePageContext);

  console.log(menu);
  return search ? (
    <div className="o-file-manage-header__container">
      <img
        ref={menuRef}
        onClick={() => setMenu(!menu)}
        className="o-file-manage-header__menu"
        src="images/menu.png"
        alt=""
      />

      <div className="o-file-manage-header__logo">
        {!search && (
          <>
            {" "}
            <img src="images/file_logo.png" alt="" />
            <p>AIGENVALUE</p>
          </>
        )}
      </div>
      <Search />
    </div>
  ) : (
    <div className="o-file-manage-header-search__container">
      <img
        ref={menuRef}
        onClick={() => setMenu(!menu)}
        className="o-file-manage-header-search__menu"
        src="images/menu.png"
        alt=""
      />
      <div className="o-file-manage-header-search__logo">
        <img src="images/file_logo.png" alt="" />
        <p>AIGENVALUE</p>
      </div>

      <Search className="m-search__container--hidden" />

      <img
        ref={searchIconRef}
        src="images/loupe.png"
        className={`o-file-manage-header-search__icon 
        `}
        onClick={() => setSearch(true)}
        alt=""
      />
    </div>
  );
};

export default FilePageHeader;
