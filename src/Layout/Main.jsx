import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet></Outlet>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
