import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { store } from "../App";

const Login = () => {
  const navigate = useNavigate();
  // const [token,setToken] = useContext(store) ;
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const sendRequest = () => {
    axios
      .post("http://localhost:8000/api/user/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .then((res) => localStorage.setItem("user", res.data));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest();
    if (localStorage.getItem("user")) {
      navigate("/myprofile");
    }
    // if(token){
    //     navigate('/myprofile') ;
    // }
  };

  return (
    <div className="auth-form-container m-2 p-5">
      <div className="flex-container m-2 p-5">
        <div>
          <h1>Login</h1>
        </div>
        <div>
          <form
            className="login-form border border-success border-3 rounded m-2 p-5"
            onSubmit={handleSubmit}
          >
            <div className="form-outline">
              <label htmlFor="email"></label>
              <input
                type="text"
                placeholder="Email Address"
                onChange={handleChange}
                name="email"
                value={inputs.email}
                required
              />
            </div>
            <br />
            <label htmlFor="password"></label>
            <input
              type="text"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={inputs.password}
              required
            />
            <br />
            <br />
            <button class="btn btn-success"
              type="submit"
              disabled={
                inputs.email && inputs.password.length > 5 ? false : true
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
