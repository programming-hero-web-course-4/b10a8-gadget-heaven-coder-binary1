import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export const GadgetContext = createContext();

const Root = () => {
  const [gadgets, setGadgets] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data);
        const newCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(newCategories);
      });
  }, []);
  return (
    <div className="flex flex-col h-screen  font-sora">
      <NavBar></NavBar>
      <div className="grow">
        <GadgetContext.Provider value={[categories, gadgets]}>
          <Outlet></Outlet>
        </GadgetContext.Provider>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
