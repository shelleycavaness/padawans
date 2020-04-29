import React, { useState } from "react";
import api from "../utils/api";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageError, setMessageError] = useState("");

  const handelSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    let body = { firstname, lastname, email, password };
    api
      .post("/padawans/register", body)
      .then((response) => {
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error.response.data.message.sqlMessage);
        setMessageError(error.response.data.message.sqlMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      {success ? (
        <span>Vous etes bien enregistré</span>
      ) : (
        <div>
          {isLoading ? (
            <span>"Enregistrement en cours..."</span>
          ) : (
            <form onSubmit={handelSubmit}>
              <div>
                <label>Firstname</label>
                <input
                  onChange={(event) => setFirstname(event.target.value)}
                  type="text"
                  required
                />
              </div>
              <div>
                <label>Lastname</label>
                <input
                  onChange={(event) => setLastname(event.target.value)}
                  type="text"
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  required
                />
              </div>
              <div> {messageError && <span>{messageError}</span>}</div>
              <div>
                <button type="submit">S'enregistrer</button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default Register;
