import PropTypes from "prop-types";
import checkMark from "../../assets/Group.png";
import { useNavigate } from "react-router-dom";

const PurchaseModal = ({ purchaseAmount }) => {
  const navigate = useNavigate();

  const handleCloseBtn = () => {
    navigate("/");
  };

  return (
    <div>
      <dialog id="purchaseModal" className="modal">
        <div className="modal-box text-center">
          <figure>
            <img className="mx-auto my-4" src={checkMark} alt="" />
          </figure>
          <h3 className="text-2xl text-violet-600 font-bold">
            Payment Successfully
          </h3>
          <div className="divider"></div>
          <p className="py-4 text-gray-600 font-normal">
            Thanks for purchasing.
          </p>
          <p className="font-normal text-gray-600">Total: {purchaseAmount}</p>
          <div className="mt-4">
            <form method="dialog">
              <button onClick={handleCloseBtn} className="btn w-full">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

PurchaseModal.propTypes = {
  purchaseAmount: PropTypes.number.isRequired,
};
export default PurchaseModal;
