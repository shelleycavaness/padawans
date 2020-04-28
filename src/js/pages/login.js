import React, { useState } from "react";
import api, { addAuth } from "../utils/api";
import { setPadawanLocalStorage } from "../utils/local-storage";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  console.log("email: ", email);
  console.log("password: ", password);
  const handleSubmit = (event) => {
    setIsLoading(true);
    let body = {
      email,
      password,
    };
    event.preventDefault();
    api
      .post("/padawans/authenticate", body)
      .then((response) => {
        addAuth(response.data.data.token);
        setMessage(response.data.message);
        setPadawanLocalStorage(response.data.data);
      })
      .catch((error) => {
        setIsLoading(false);
        setMessage(error.response.data.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="">
      {isLoading ? (
        <span>is loading</span>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="">
            <label>Username</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="text"
              required
            />
          </div>
          <div className="">
            <label>Password</label>
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              required
            />
          </div>
          <br />
          <button type="submit">Se connecter</button>
          <br />
          {message && <span>{message}</span>}
        </form>
      )}
    </div>
  );
};
export default Login;
