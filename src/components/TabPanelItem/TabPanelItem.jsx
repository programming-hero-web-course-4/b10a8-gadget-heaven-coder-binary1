import PropTypes from "prop-types";
import { GoSortAsc, GoSortDesc } from "react-icons/go";

const TabPanelItem = ({ totalPrice, handleSortBtn, sort, tabName }) => {
  return (
    <div className="flex justify-between mb-6 grow items-center">
      <h2 className="text-black font-bold text-2xl   text-center lg:text-left">
        {tabName}
      </h2>
      <div className=" flex items-center gap-6">
        <h2 className="text-black text-2xl font-bold">
          Total Price: {totalPrice}
        </h2>
        <button
          onClick={handleSortBtn}
          className="btn btn-outline text-[#9538E2] rounded-full font-bold text-lg"
        >
          Sort by Price {sort ? <GoSortAsc /> : <GoSortDesc />}
        </button>
      </div>
    </div>
  );
};

TabPanelItem.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  handleSortBtn: PropTypes.func.isRequired,
  sort: PropTypes.bool.isRequired,
  tabName: PropTypes.string.isRequired,
};
export default TabPanelItem;
