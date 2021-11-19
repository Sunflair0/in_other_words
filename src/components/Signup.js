import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import useFetch from "../hooks/useFetch";
// import { useHistory } from "react-router";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { callAPI: signupCall } = useFetch("POST");
  const [error, setError] = useState(null);
  // const history = useHistory();
  return (
    <>
      <h2 className="text-center">Signup</h2>
      <form className="form">
        <div className="form-field flex-wrap">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="form-field flex-wrap">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button
          className="btn"
          onClick={async (e) => {
            e.preventDefault();
            if (
              username.length > 4 &&
              password.length > 4 &&
              username.length <= 20 &&
              password.length <= 20
            ) {
              setError(null);
              let res = await signupCall("/api/users/signup", {
                username,
                password,
              });
              if (res.error) {
                return setError(res.error);
              }
            }
          }}
        >
          Signup
        </button>
      </form>
      <div>{error}</div>
    </>
  );
};

export default Signup;
