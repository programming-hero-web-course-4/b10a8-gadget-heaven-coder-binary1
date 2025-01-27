import ReactStars from "react-rating-stars-component";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { GadgetContext } from "../Root/Root";
import { useParams } from "react-router-dom";

const GadgetDetail = () => {
  const gadgets = useContext(GadgetContext);
  const param = useParams();

  const gadget = gadgets[1].find(
    (gadget) => gadget.product_id === param.gadgetId
  );

  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    Specification,
    rating,
  } = gadget;

  return (
    <div className="card flex-row bg-base-100 w-2/4 relative bottom-48 shadow-lg p-8 mx-auto">
      <figure className="shadow-sm p-4 rounded-lg">
        <img className="w-sm" src={product_image} alt="Shoes" />
      </figure>
      <div className="w-1/2 ml-8 space-y-4 py-0">
        <h2 className="card-title text-3xl">{product_title}</h2>
        <p className="text-gray-500 font-semibold text-xl">Price: ${price}</p>
        <div
          className={
            availability
              ? "badge badge-soft badge-success border-2 font-bold"
              : "badge badge-soft badge-error border-2 font-bold"
          }
        >
          {availability ? "In Stock" : "Out of Stock"}
        </div>
        <p className="text-gray-400">{description}</p>
        <div>
          <span className="font-bold">Specification:</span>
          {Specification.map((spec, idx) => (
            <p className="text-gray-400" key={idx}>
              <span className="font-semibold">{idx + 1}.</span> {spec}
            </p>
          ))}
        </div>
        <div>
          <p className="font-bold">
            Rating <FaStar className="text-orange-300 text-xl inline " />
          </p>
          <div className="flex items-center gap-4">
            <div>
              <ReactStars
                className="text-orange-300 text-xl"
                count={5}
                value={rating}
                size={24}
                edit={false}
                char={<FaStar />}
              />
            </div>
            <div className="badge badge-lg">{rating}</div>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn bg-[#9538E2] text-lg text-white rounded-full">
            Add To Card <AiOutlineShoppingCart className="text-2xl ml-1" />
          </button>
          <button className="btn bg-white rounded-full px-3">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetail;
