import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
    const responseMessage = (res) => {
        console.log(res)
      }
      const errorMessage = (err) => {
        console.log(err)
      }
  return (
    <div>
      <h1>login</h1>
      <p>gmail</p>
      <input type="text" placeholder="gmail" />
      <p>password</p>
      <input type="password" placeholder="password" />
      <button type="submit">login</button>
      <button>registarsi</button>
      <GoogleLogin
        onSuccess={responseMessage}
        onError={errorMessage}
      ></GoogleLogin>
    </div>
  );
};

export default Login;
