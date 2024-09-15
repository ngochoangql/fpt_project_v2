import React, { useRef, useState } from "react";
import "./style.scss";
const Select = () => {
  const selectRef = useRef<any>(null);
  const [openSelect, setOpenSelect] = useState(false);
  return (
    <div className="m-select__container">
      <div
        onClick={() => setOpenSelect(!openSelect)}
        className="m-select__select"
      >
        <p>My File</p>
        <img src="images/select.png" alt="" />
      </div>
      <div className={`m-select__option ${openSelect && "m-select__option--active"}`}>
        <div className="m-select__option-1 m-select__option--flex">
          <p>New Folder</p>
          <img src="images/select.png" alt="" />
        </div>
        <div className="m-select__option-2 m-select__option--flex">
          <p>Upload File</p>
          <img src="images/select.png" alt="" />
        </div>
        <div className="m-select__option-2 m-select__option--flex">
          <p>Upload Folder</p>
          <img src="images/select.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Select;
