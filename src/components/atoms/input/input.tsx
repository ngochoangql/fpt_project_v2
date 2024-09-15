import React, { FC } from "react";
import "./style.scss";
interface InputProps {
  className?: string; // Optional className prop
  placeholder?: string;
  type: string;
  value?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input: FC<InputProps> = ({
  className,
  placeholder,
  value,
  type,
  onKeyDown,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={`a-input ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
    ></input>
  );
};
