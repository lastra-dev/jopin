import React from "react";
import NavBar from "../../components/NavBar";
import LoginImg from "../../assets/images/login-img.svg";
import "./LoginScreen.css"

const LoginScreen = () => {
  return (
    <div>
      <NavBar />
      <div className="flex column">
        <img
          src={LoginImg}
          alt="A person sitting on the window"
          className="center login-img"
        />
        <form style={{textAlign: "center"}}>
          <p className="label fs-300">Usuario</p>
          <input className="rounded-border input" type={"text"}></input>
          <p className="label fs-300 mt-8">Contraseña</p>
          <input className="rounded-border input" type={"password"}></input>
          <button className="primary-btn btn-shadow fs-500 login-btn">INICIAR SESIÓN</button>
          <p className="subtitle text-gray">Ingresa utilizando tu cuenta IEST.</p>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
