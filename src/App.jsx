// import { useState } from 'react'
import'./App.css'
import { Routes, Route } from "react-router-dom";
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import Layout from './components/Layout/Layout.jsx';
import LoginPage from "./pages/LoginPage/LoginPage.jsx";


function App() {

  // const Home = () => <h1>Home Page</h1>;
  const Register = () => <RegisterPage />;
  const Login = () => <LoginPage />;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*<Route path='/' element={<Home/>}/>*/}
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login/>}/>
        </Route>

      </Routes>

    </>
  )
}

export default App
