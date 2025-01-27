import { NavLink, Outlet } from "react-router-dom";
import CategorySideBar from "../CategorySideBar/CategorySideBar";
import { useContext } from "react";
import { GadgetContext } from "../Root/Root";

const Gadgets = () => {
  const categories = useContext(GadgetContext);

  return (
    <div>
      <h2 className="text-3xl lg:text-4xl font-bold text-center mt-[180px] lg:mt-[400px]">
        Explore Cutting-Edge Gadgets
      </h2>

      <div className="flex pt-12 pb-24 w-5/6 mx-auto ">
        <div className="card lg:flex flex-col gap-2 shadow-sm rounded-2xl p-6 hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-wide bg-[#9538E2] border-none rounded-full text-white"
                : "btn btn-wide btn-active border-none rounded-full text-gray-500"
            }
          >
            All Product
          </NavLink>
          {categories[0].map((category, idx) => (
            <CategorySideBar key={idx} category={category}></CategorySideBar>
          ))}
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
