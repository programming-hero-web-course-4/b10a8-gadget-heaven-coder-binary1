import { useContext, useEffect, useState } from "react";
import { GadgetContext } from "../Root/Root";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  getCartList,
  getWishList,
  modalOpen,
  priceSum,
} from "../../utilities/addToDb";
import CommonBanner from "../CommonBanner/CommonBanner";
import DashBoardItems from "../DashBoardItems/DashBoardItems";
import TabPanelItem from "../TabPanelItem/TabPanelItem";
import PurchaseModal from "../PurchaesModal/PurchaseModal";

const DashBoard = () => {
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [sort, setSort] = useState(true);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [totalWishPrice, setTotalWishPrice] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const AllData = useContext(GadgetContext);

  useEffect(() => {
    const cartId = getCartList();
    const cartList = AllData[1].filter((data) =>
      cartId.includes(data.product_id)
    );

    setCart(cartList);
  }, [AllData]);

  useEffect(() => {
    const wishId = getWishList();
    const wishList = AllData[1].filter((data) =>
      wishId.includes(data.product_id)
    );
    setWish(wishList);
  }, [AllData]);

  useEffect(() => {
    const totalCartPrice = priceSum(cart.map((price) => price.price));
    setTotalCartPrice(parseFloat(totalCartPrice.toFixed(2)));
  }, [cart]);

  useEffect(() => {
    const totalWishPrice = wish
      .map((price) => price.price)
      .reduce((accumulator, number) => number + accumulator, 0);
    setTotalWishPrice(parseFloat(totalWishPrice.toFixed(2)));
  }, [wish]);

  const handleSortBtnInCart = () => {
    setSort(!sort);
    sort && setCart(cart.sort((a, b) => a.price - b.price));
    sort || setCart(cart.sort((a, b) => b.price - a.price));
  };

  const handleSortBtnInWish = () => {
    setSort(!sort);
    sort && setWish(wish.sort((a, b) => a.price - b.price));
    sort || setWish(wish.sort((a, b) => b.price - a.price));
  };

  const handlePurchaseBtn = () => {
    setPurchaseAmount(totalCartPrice);
    modalOpen();
    setCart([]);
  };

  return (
    <div className="bg-base-200 h-full">
      <CommonBanner pageName="Dashboard"></CommonBanner>
      <div>
        <Tabs
          selectedTabClassName="bg-white rounded-full text-[#9538E2]"
          className="text-white"
        >
          <TabList>
            <div className="flex justify-center gap-6 bg-[#9538E2] pb-8">
              <Tab>
                <button className="btn btn-outline rounded-full px-16 hover:bg-white hover:text-[#9538E2]">
                  Cart
                </button>
              </Tab>
              <Tab>
                <button className="btn btn-outline rounded-full px-16 hover:bg-white hover:text-[#9538E2]">
                  Wishlist
                </button>
              </Tab>
            </div>
          </TabList>

          <TabPanel className="max-w-7xl mx-auto my-8">
            <div className="flex flex-col lg:flex-row mb-6">
              <TabPanelItem
                totalPrice={totalCartPrice}
                handleSortBtn={handleSortBtnInCart}
                sort={sort}
                tabName="Cart"
              ></TabPanelItem>
              <button
                onClick={handlePurchaseBtn}
                className="btn bg-[#9538E2] rounded-full mt-5 lg:mt-0 lg:ml-5 text-lg text-white font-bold"
                disabled={cart.length === 0 ? true : false}
              >
                Purchase
              </button>
              <PurchaseModal purchaseAmount={purchaseAmount}></PurchaseModal>
            </div>
            <div className="space-y-6">
              {cart.map((cart) => (
                <DashBoardItems
                  key={cart.product_id}
                  gadget={cart}
                  updateState={setCart}
                  AllData={AllData}
                  storageType="cart"
                ></DashBoardItems>
              ))}
            </div>
          </TabPanel>
          <TabPanel className="max-w-7xl mx-auto my-8">
            <TabPanelItem
              totalPrice={totalWishPrice}
              handleSortBtn={handleSortBtnInWish}
              sort={sort}
              tabName="Wishlist"
            ></TabPanelItem>

            <div className="space-y-6">
              {wish.map((wish) => (
                <DashBoardItems
                  key={wish.product_id}
                  gadget={wish}
                  updateState={setWish}
                  AllData={AllData}
                  storageType="wish"
                ></DashBoardItems>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default DashBoard;
