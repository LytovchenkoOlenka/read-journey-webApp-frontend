// import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";

// import WelcomePage from "./pages/WelcomePage/WelcomePage.jsx";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage.jsx";
// import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage.jsx";
// import ReadingPage from "./pages/ReadingPage/ReadingPage.jsx";

function App() {
  // const Home = () => <h1>Home Page</h1>;
  // const Register = () => <RegisterPage />;
  // const Login = () => <LoginPage />;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/recommended" element={<RecommendedPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
