import React, { FC } from "react";
import "./style.scss";

interface IconProps {
  className?: string;
  src: string;
  alt?: string;
  onClick?: () => void;
}

const Icon: FC<IconProps> = ({ className, src, alt, onClick }) => {
  return (
    <div onClick={onClick} className="a-icon" >
      <img src={src} alt={alt} />
    </div>
  );
};

export default Icon;
