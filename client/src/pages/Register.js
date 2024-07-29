
import React,{useState,useEffect} from 'react'
import {Form,Input,message} from 'antd'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import Spinner from "../components/Spinner";
import "../styles/RegisterPage.css";

const Register = () => {
    const[loading,setLoading] = useState(false)
    const navigate = useNavigate();
    const submitHandler = async (values) =>{
        try{
            setLoading(true)
            await axios.post('/users/register',values)
            message.success("Registration successfull")
            setLoading(false)
            navigate('/login')
        }catch(err){
            setLoading(false)
            message.error("Invalid username or password")
        }
        console.log(values)
    }
    //   //prevent for login user
    useEffect(() => {
        if (localStorage.getItem("user")) {
        navigate("/");
        }
    }, [navigate]);
  return (
    <>
        <div className="register-page ">
        {loading && <Spinner />}
        <Form
          className="register-form"
          layout="vertical"
          onFinish={submitHandler}
        >
          <h2>Register Form</h2>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <div className="d-flex justify-content-between">
            <Link to="/login">Already Register? login here!</Link>
            <button className="btn ">Register</button>
          </div>
        </Form>
      </div>
    </>
    
  )
}

export default Register



// import React, { useState, useEffect } from "react";
// import { Form, Input, message } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Spinner from "../components/Spinner";
// const Register = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   //from submit
//   const submitHandler = async (values) => {
//     try {
//       setLoading(true);
//       await axios.post("/users/register", values);
//       message.success("Registeration Successfull");
//       setLoading(false);
//       navigate("/login");
//     } catch (error) {
//       setLoading(false);
//       message.error("something went wrong");
//     }
//   };

//   //prevent for login user
//   useEffect(() => {
//     if (localStorage.getItem("user")) {
//       navigate("/");
//     }
//   }, [navigate]);
//   return (
//     <>
//       <div className="register-page ">
//         {loading && <Spinner />}
//         <Form layout="vertical" onFinish={submitHandler}>
//           <h1>Register Form</h1>
//           <Form.Item label="Name" name="name">
//             <Input />
//           </Form.Item>
//           <Form.Item label="Email" name="email">
//             <Input type="email" />
//           </Form.Item>
//           <Form.Item label="Password" name="password">
//             <Input type="password" />
//           </Form.Item>
//           <div className="d-flex justify-content-between">
//             <Link to="/login">Already Register ? Click Here to login</Link>
//             <button className="btn btn-primary">Register</button>
//           </div>
//         </Form>
//       </div>
//     </>
//   );
// };
// export default Register;