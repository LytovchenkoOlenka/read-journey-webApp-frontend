// import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

import Layout from "./components/Layout/Layout.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";

// import WelcomePage from "./pages/WelcomePage/WelcomePage.jsx";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage.jsx";
import MyLibraryPage from "./pages/MyLibraryPage/MyLibraryPage.jsx";
// import ReadingPage from "./pages/ReadingPage/ReadingPage.jsx";

function App() {
  // const Home = () => <h1>Home Page</h1>;
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <b>Refreshing user...</b>; // компонент спіннера
  }

  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/" element={<Layout />}>
          {/* <Route path='/' element={<Home/>}/> */}

          <Route path="recommended" element={<RecommendedPage />} />
          <Route path="library" element={<MyLibraryPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
