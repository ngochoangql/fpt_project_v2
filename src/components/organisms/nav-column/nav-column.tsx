import React, { FC, useContext, useEffect } from "react";
import "./style.scss";
import NavigatesButton from "../../molecules/navigate-button/navigate-button";
import UserProfile from "../../molecules/user-profile/user-profile";
import { FilePageContext } from "../../pages/file_manage_page/file_manage_page";

interface NavColumnProps {
  className?: string;
}

const NavColumn: FC<NavColumnProps> = ({ className }) => {
  const { menu,setMenu,navRef} = useContext(FilePageContext);
  
  
  return (
    <div ref={navRef} className={`o-nav-column__container ${className} ${menu && "active"}`}>
      <NavigatesButton />
      <UserProfile name="Hoàng" />
    </div>
  );
};

export default NavColumn;
