import React, { createContext, useState } from "react";
import { Input } from "../../atoms/input/input";
import { FormLogin } from "../../molecules/form_login/form_login";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export const LoginPageContext = createContext<any>(null);

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    if (email === "admin" && password ==="admin"){
        navigate('/chat')
    }
  }
  
  return (
    <LoginPageContext.Provider
      value={{ email, handleChangeEmail, password, handleChangePassword,handleLogin }}
    >
      <div className="login-page__container">
        <img className="login-page__logo" src="images/image.png" />

        <div className="login-page__login-form">
          <FormLogin />
        </div>
      </div>
    </LoginPageContext.Provider>
  );
};

export default LoginPage;
