import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Layout() {
  return (
    <div className="flex flex-col gap-2.5 p-5 my-0 mx-auto">
      <Header />
      <main className="flex flex-col gap-2.5">
        <Outlet />
      </main>
    </div>
  );
}
