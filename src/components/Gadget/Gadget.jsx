import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const { product_id, product_image, product_title, price, category } = gadget;

  return (
    <div className="card justify-between bg-base-100 lg:w-96 shadow-sm p-5 lg:mx-5">
      <figure>
        <img
          className="lg:w-2/4 2xl:w-3/4"
          src={product_image}
          alt={product_title}
        />
      </figure>
      <div className="card-body grow-0">
        <h2 className="card-title text-2xl">{product_title}</h2>
        <p className="text-xl font-medium text-gray-500">Price: ${price}</p>
        <Link to={`/${category}/${product_id}`}>
          <div className="card-action ">
            <button className="btn bg-[#9538E2] text-white w-full hover:bg-white hover:text-[#9538E2] hover:border-[#9538E2]">
              Details
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

Gadget.propTypes = {
  gadget: PropTypes.object.isRequired,
};
export default Gadget;
