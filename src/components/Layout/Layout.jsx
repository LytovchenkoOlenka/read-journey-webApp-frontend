import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <div className="p-5 my-0 mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
