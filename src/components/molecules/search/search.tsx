import React, { FC, useContext } from "react";
import "./style.scss";
import { Input } from "../../atoms/input/input";
import { FilePageContext } from "../../pages/file_manage_page/file_manage_page";

interface SearchProps {
    className?:string ;
}

const Search : FC<SearchProps> = ({className}) => {
     const {searchRef} = useContext(FilePageContext)
  return (
    <div ref={searchRef} className={`m-search__container ${className}`}>
      <div className="m-search__input">
        <img src="images/loupe.png" width={24} height={24}/>
        <Input
          type="text"
          className="a-input--grow a-input--transparent a-input--24px"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default Search;
