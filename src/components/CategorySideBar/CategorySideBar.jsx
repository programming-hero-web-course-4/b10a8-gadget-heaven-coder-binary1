import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const CategorySideBar = ({ category }) => {
  return (
    <>
      <NavLink
        to={`/${category}`}
        className={({ isActive }) =>
          isActive
            ? "btn btn-wide bg-[#9538E2] border-none rounded-full text-white"
            : "btn btn-wide btn-active border-none rounded-full text-gray-500"
        }
      >
        {category}
      </NavLink>
    </>
  );
};

CategorySideBar.propTypes = {
  category: PropTypes.string.isRequired,
};
export default CategorySideBar;
