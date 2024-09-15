import React, { useContext } from "react";
import "./style.scss";
import { Input } from "../../atoms/input/input";
import { Button } from "../../atoms/button/button";
import { LoginPageContext } from "../../pages/login_page/login_page";
export const FormLogin = () => {
  const {
    email,
    handleChangeEmail,
    password,
    handleChangePassword,
    handleLogin,
  } = useContext(LoginPageContext);
  return (
    <div className="m-form-login__container">
      <p>User Login</p>
      <div className="m-form-login__input">
        <Input
          type="text"
          className="a-input__login a-input__login--primary "
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        />
        <img className="m-form-login__img" src="images/email.png" />
      </div>
      <div className="m-form-login__input">
        <Input
          type="password"
          className="a-input__login a-input__login--primary "
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
        />
        <img className="m-form-login__img" src="images/password_hidden.png" />
      </div>
      <div className="m-form-login__button">
        <Button
          className="a-button a-button--login a-button--center"
          title="Login"
          onClick={handleLogin}
        />
      </div>
    </div>
  );
};
