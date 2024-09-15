import React, { FC, useContext, useState } from "react";
import "./style.scss";
import { Button } from "../../atoms/button/button";
import { ManageFileContext } from "../../organisms/mange-file/manage-file";
interface PaginationBarProps {
    className?:string;
    pages:number
}
const PaginationBar : FC<PaginationBarProps>= ({pages}) => {
    const {index,setIndex} = useContext(ManageFileContext) 

  

  return index <= 3 ? (
    <div className="m-pagination-bar__container">
      {" "}
      <Button
        onClick={() => setIndex(1)}
        className={`a-button--pagination a-button--pagination${
          index === 1 && "--selected"
        }`}
        title={1}
      />
      <Button
        onClick={() => setIndex(2)}
        className={`a-button--pagination a-button--pagination${
          index === 2 && "--selected"
        }`}
        title={2}
      />
      <Button
        onClick={() => setIndex(3)}
        className={`a-button--pagination a-button--pagination${
          index === 3 && "--selected"
        }`}
        title={3}
      />
      <Button
        onClick={() => setIndex(4)}
        className="a-button--pagination"
        title={4}
      />
      <Button className="a-button--pagination" title={"..."} />
      <Button
        onClick={() => setIndex(pages)}
        className="a-button--pagination"
        title={pages}
      />
      <div
        onClick={() => setIndex(index + 1)}
        className="m-pagination-bar__prev-next"
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.339996 1.41L4.92 6L0.339996 10.59L1.75 12L7.75 6L1.75 0L0.339996 1.41Z"
            fill="#C4CDD5"
          />
        </svg>
      </div>
    </div>
  ) : index >= 4 && index <= pages - 3 ? (
    <div className="m-pagination-bar__container">
      {" "}
      <div
        onClick={() => setIndex(index + -1)}
        className="m-pagination-bar__prev-next"
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.66 1.41L3.08 6L7.66 10.59L6.25 12L0.250004 6L6.25 0L7.66 1.41Z"
            fill="#C4CDD5"
          />
        </svg>
      </div>
      <Button
        onClick={() => setIndex(1)}
        className="a-button--pagination"
        title={1}
      />
      <Button className="a-button--pagination" title={"..."} />
      <Button
        onClick={() => setIndex(index - 1)}
        className="a-button--pagination"
        title={index - 1}
      />
      <Button
        onClick={() => setIndex(index)}
        className="a-button--pagination a-button--pagination--selected"
        title={index}
      />
      <Button
        onClick={() => setIndex(index + 1)}
        className="a-button--pagination"
        title={index + 1}
      />
      <Button className="a-button--pagination" title={"..."} />
      <Button
        onClick={() => setIndex(pages)}
        className="a-button--pagination"
        title={pages}
      />
      <div
        onClick={() => setIndex(index + 1)}
        className="m-pagination-bar__prev-next"
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.339996 1.41L4.92 6L0.339996 10.59L1.75 12L7.75 6L1.75 0L0.339996 1.41Z"
            fill="#C4CDD5"
          />
        </svg>
      </div>
    </div>
  ) : (
    <div className="m-pagination-bar__container">
      <div
        onClick={() => setIndex(index + -1)}
        className="m-pagination-bar__prev-next"
      >
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.66 1.41L3.08 6L7.66 10.59L6.25 12L0.250004 6L6.25 0L7.66 1.41Z"
            fill="#C4CDD5"
          />
        </svg>
      </div>
      <Button
        onClick={() => setIndex(1)}
        className="a-button--pagination"
        title={1}
      />
      <Button className="a-button--pagination" title={"..."} />
      <Button
        onClick={() => setIndex(pages - 3)}
        className="a-button--pagination"
        title={pages - 3}
      />
      <Button
        onClick={() => setIndex(pages - 2)}
        className={`a-button--pagination a-button--pagination${
          index === pages - 2 && "--selected"
        }`}
        title={pages - 2}
      />
      <Button
        onClick={() => setIndex(pages - 1)}
        className={`a-button--pagination a-button--pagination${
          index === pages - 1 && "--selected"
        }`}
        title={pages - 1}
      />
      <Button
        onClick={() => setIndex(pages)}
        className={`a-button--pagination a-button--pagination${
          index === pages && "--selected"
        }`}
        title={pages}
      />
    </div>
  );
};

export default PaginationBar;
