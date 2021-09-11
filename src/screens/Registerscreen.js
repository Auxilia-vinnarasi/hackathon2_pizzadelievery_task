import React,{useState,useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { registerUser } from '../actions/userActions';

export default function Registerscreen() {
    const[name, setname]=useState("");
    const[email, setemail]=useState("");
    const[password, setpassword]=useState("");
    const[cpassword,setcpassword]=useState("");
   
    const dispatch=useDispatch();

    function register(){
        if(password!=cpassword)
        {
            alert("password not matched")
        }
        else{
            const user={
                name,//name:name
                email,//email:email
                password//password:password
            }
            console.log(user)
            dispatch(registerUser(user))//dispatch action by sending the user
        }
    }
    return (
        <div>
             <div className="row justify-content-center mt-5">
                 <div className="col-md-5 mt-5 text-left">
                    <div>
                        <h2 style={{fontsize:"35px"}}>Register</h2>
                        <input type="text" placeholder="Name" value={name} required onChange={(e)=>setname(e.target.value)} className="form-control"/>
                        <input type="text" placeholder="Email" value={email} required onChange={(e)=>setemail(e.target.value)} className="form-control"/>
                        <input type="text" placeholder="Password" value={password} required onChange={(e)=>setpassword(e.target.value)}className="form-control"/>
                        <input type="text" placeholder="Confirm Password" value={cpassword}  required onChange={(e)=>setcpassword(e.target.value)}className="form-control"/>
                        <button onClick={register} className="btn mt-3">Register</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
