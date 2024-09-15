import React, { FC } from "react";
import "./style.scss";
interface ButtonProps {
  className?: string;
  title?: string | number;
  urlImage?: string;
  onClick?: () => void;
}
export const Button: FC<ButtonProps> = ({
  className,
  onClick,
  title,
  urlImage,
}) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      {urlImage && <img src={urlImage} />}
      {title}
    </button>
  );
};
