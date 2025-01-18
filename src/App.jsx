// import { useState } from 'react'
import'./App.css'
import { Routes, Route } from "react-router-dom";
import RegisterForm from './components/RegisterForm/RegisterForm.jsx';


function App() {

  const Home = () => <h1>Home Page</h1>;
  const Register = () => <RegisterForm />;
  const Login = () => <h1>Login Page</h1>;

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>

    </>
  )
}

export default App
