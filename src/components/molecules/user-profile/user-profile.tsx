import React, { FC } from "react";
import "./style.scss";

interface UserProfileProps {
  className?: string;
  name:string
}
const UserProfile: FC<UserProfileProps> = ({ className,name }) => {
  return (
    <div className={`m-user-profile__container ${className}`}>
        <img src="images/Frame 435.png" alt=""/>
        <div className="m-user-profile__name">
            <p style={{color:"gray"}}>Welcome back,</p>
            <p>{name}</p>
        </div>
    </div>
  );
};

export default UserProfile;
