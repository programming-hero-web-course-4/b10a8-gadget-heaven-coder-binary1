import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col h-screen  font-sora">
      <NavBar></NavBar>
      <div className="grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
