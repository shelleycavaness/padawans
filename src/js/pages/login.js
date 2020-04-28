import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoding, setIsLoding] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [erros, setErrors] = useState(null);
  const [title, setTitle] = useState("title form");

  console.log("email: ", email);
  console.log("password: ", password);
  const handleSubmit = (event) => {
    setIsLoding(true);
    let body = {
      email,
      password,
    };
    event.preventDefault();
    setTimeout(() => {
      setIsLoding(false);
    }, 4000);
    setTitle("formulaire envoyé");
  };
  return (
    <div>
      {isLoding ? (
        "chargement en cours"
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>title</h1>
          <div>{title !== null ? title : ""}</div>
          <div className="">
            <label>Email </label>
            <input
              id="email"
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            ></input>
            {email}
          </div>
          <div className="">
            <label>Password</label>
            <input
              id="password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <div>
            <button type="submit">Se connecter</button>
          </div>
        </form>
      )}
    </div>
  );
};
export default Login;
