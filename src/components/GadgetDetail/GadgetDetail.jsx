import clsx from "clsx";
import { ToastContainer, toast, Bounce } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useState } from "react";
import { GadgetContext } from "../Root/Root";
import { useParams } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";
import { addToCartList, addToWishList } from "../../utilities/addToDb";

const GadgetDetail = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const gadgets = useContext(GadgetContext);
  const param = useParams();

  const gadget = gadgets[1]?.find(
    (gadget) => gadget?.product_id === param?.gadgetId
  );

  // const {
  //   product_image,
  //   product_title,
  //   price,
  //   availability,
  //   description,
  //   Specification,
  //   rating,
  // } = gadget;

  const handleAddToCartBtn = (id) => {
    addToCartList(id);
    toast.success("successfully add to cart");
  };
  const handleWishListBtn = (id) => {
    const isAdded = addToWishList(id);
    isAdded && toast.info("successfully add to wishlist");
    !isAdded && toast.warn("already exist in wishlist");
    setButtonDisabled(true);
  };

  return (
    <div className="card lg:flex-row bg-base-100 lg:w-2/4 relative lg:bottom-52 shadow-lg p-8 mx-5 lg:mx-auto mt-5">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Bounce}
      />
      <PageTitle title={`${gadget?.product_title} | Gadget Heaven`}></PageTitle>
      <figure className="shadow-sm p-4 rounded-lg">
        <img className="w-sm" src={gadget?.product_image} alt="Shoes" />
      </figure>
      <div className="lg:w-1/2 ml-8 space-y-4 py-0">
        <h2 className="card-title text-3xl">{gadget?.product_title}</h2>
        <p className="text-gray-500 font-semibold text-xl">
          Price: ${gadget?.price}
        </p>
        <div
          // className={
          //   gadget?.availability
          //     ? "badge badge-soft badge-success border-2 font-bold"
          //     : "badge badge-soft badge-error border-2 font-bold"
          // }
          className={clsx(
            "badge badge-soft border-2 font-bold",
            gadget?.availability ? "badge-success" : "badge-error"
          )}
        >
          {gadget?.availability ? "In Stock" : "Out of Stock"}
        </div>
        <p className="text-gray-400">{gadget?.description}</p>
        <div>
          <span className="font-bold">Specification:</span>
          {gadget?.Specification.map((spec, idx) => (
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
                value={gadget?.rating}
                size={24}
                edit={false}
                char={<FaStar />}
              />
            </div>
            <div className="badge badge-lg">{gadget?.rating}</div>
          </div>
        </div>
        <div className="card-actions">
          <button
            className="btn bg-[#9538E2] text-lg text-white rounded-full"
            onClick={() => {
              handleAddToCartBtn(param.gadgetId);
            }}
          >
            Add To Card <AiOutlineShoppingCart className="text-2xl ml-1" />
          </button>
          <button
            className="btn bg-white rounded-full px-3 hover:border-[#9538E2] transition-all duration-700"
            onClick={() => {
              handleWishListBtn(param.gadgetId);
            }}
            disabled={isButtonDisabled}
          >
            <FaRegHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetail;
