import PropTypes from "prop-types";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
  getCartList,
  getWishList,
  removeFromCart,
  removeFromWish,
} from "../../utilities/addToDb";

const DashBoardItems = ({ gadget, updateState, AllData, storageType }) => {
  const { product_id, product_image, product_title, description, price } =
    gadget;

  const handleCartList = (id) => {
    removeFromCart(id);
    const cartId = getCartList();
    const cartList = AllData[1].filter((data) =>
      cartId.includes(data.product_id)
    );
    updateState(cartList);
  };

  const handleWishList = (id) => {
    removeFromWish(id);
    const wishId = getWishList();
    const wishList = AllData[1].filter((data) =>
      wishId.includes(data.product_id)
    );
    updateState(wishList);
  };

  return (
    <div className="card flex-col-reverse lg:flex-row gap-6 bg-base-100 shadow-sm p-5 mx-5 text-black">
      <div className="card lg:flex-row">
        <figure className="shadow-sm p-2 rounded-xl">
          <img className="w-96" src={product_image} alt={product_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{product_title}</h2>
          <p className="text-gray-500">
            {" "}
            <span className="text-gray-800 font-bold">Description: </span>
            {description}
          </p>
          <p className="text-2xl text-gray-600">
            <span className="font-bold">Price: </span> ${price}
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          storageType === "cart"
            ? handleCartList(product_id)
            : handleWishList(product_id);
        }}
        className="justify-end btn bg-transparent shadow-none border-none rounded-full text-red-500 text-3xl hover:scale-115 transition-transform duration-300"
      >
        <IoIosCloseCircleOutline />
      </button>
    </div>
  );
};

DashBoardItems.propTypes = {
  gadget: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired,
  AllData: PropTypes.array.isRequired,
  storageType: PropTypes.string.isRequired,
};
export default DashBoardItems;
