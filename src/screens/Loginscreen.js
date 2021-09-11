import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {loginUser} from "../actions/userActions";

export default function Loginscreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
if(localStorage.getItem("currentUser"))
{
    window.location.href="/"
}
  },[])

  function login() {
      const user={email,password}
    dispatch(loginUser(user));
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left">
          <div>
            <h2 style={{ fontsize:"35px"}}>Login</h2>

            <input
              type="text"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setemail(e.target.value)}
              className="form-control"
            />
            <input
              type="text"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setpassword(e.target.value)}
              className="form-control"
            />

            <button onClick={login} className="btn mt-3">
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
