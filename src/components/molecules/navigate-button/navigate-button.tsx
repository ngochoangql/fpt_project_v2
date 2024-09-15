import React, { useContext } from "react";
import "./style.scss";
import { Button } from "../../atoms/button/button";
import { FilePageContext } from "../../pages/file_manage_page/file_manage_page";
import { useNavigate } from "react-router-dom";
const NavigatesButton = () => {
    const navigate = useNavigate()
    const {setNavigateIndex,naviagteIndex} = useContext(FilePageContext)
  return (
    <div className="m-navigates-button__container">
      <Button onClick={() => setNavigateIndex(0)} className={`a-button a-button--navigate ${naviagteIndex === 0 && "a-button--navigate--active"} a-button--start a-button--mb-1`} title="File Management " urlImage="images/file.png" />
      <Button onClick={() => setNavigateIndex(1)}  className={`a-button a-button--navigate ${naviagteIndex === 1 && "a-button--navigate--active"} a-button--start a-button--mb-1`}  title="File Search Assistant " urlImage="images/virtual-assistant.png" />
      <Button onClick={() => setNavigateIndex(2)}  className={`a-button a-button--navigate ${naviagteIndex === 2 && "a-button--navigate--active"} a-button--start a-button--mb-1`}  title="Setting" urlImage="images/setting.png" />
      <Button onClick={() => navigate('/login')}  className={`a-button a-button--navigate ${naviagteIndex === 3 && "a-button--navigate--active"} a-button--start a-button--mb-1`}  title="Log Out" urlImage="images/logout.png" />
    </div>
  );
};

export default NavigatesButton;
