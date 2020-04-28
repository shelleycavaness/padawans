import React, { useState } from "react";
import api, { addAuth } from "../utils/api";
import { setPadawanLocalStorage } from "../utils/local-storage";

const Register = (props) => {
  const [firstname, setFistname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [isRegister, setRegister] = useState(true);
  const handleSubmit = (event) => {
    setIsLoading(true);
    let body = {
      firstname,
      lastname,
      email,
      password,
    };
    event.preventDefault();
    api
      .post("/padawans/register", body)
      .then((response) => {
        setMessage(response.data.message);
        setRegister(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setMessage(error.response.data.message.sqlMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="">
      <div>
        {isLoading ? (
          <span>Enregistrement en cours</span>
        ) : isRegister ? (
          <form onSubmit={handleSubmit}>
            <div className="">
              <label>Firstname</label>
              <input
                onChange={(event) => setFistname(event.target.value)}
                type="text"
                required
              />
            </div>
            <div className="">
              <label>Lastname</label>
              <input
                onChange={(event) => setLastname(event.target.value)}
                type="text"
                required
              />
            </div>

            <div className="">
              <label>Email</label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
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
            <button type="submit">S'enregister</button>
            <br />
            {message && <span>{message}</span>}
          </form>
        ) : (
          <span>Vous etes bien enregistré</span>
        )}
      </div>
    </div>
  );
};
export default Register;
