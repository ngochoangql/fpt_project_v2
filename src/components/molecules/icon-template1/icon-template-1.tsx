import React, { FC } from "react";
import Icon from "../../atoms/icon/icon";
import "./style.scss";
interface IconTemplate1Props {
  sendClick?: () => void;
}
const IconTemplate1 :FC<IconTemplate1Props> = ({sendClick}) => {
  return (
    <div className="m-icon-template1__container">
      <Icon src="images/send.png" alt="Đính kèm" />
      <Icon src="images/Emojis.png" alt="Đính kèm" />
      <Icon src="images/vector.png" alt="Đính kèm" onClick={sendClick}/>
    </div>
  );
};

export default IconTemplate1;
