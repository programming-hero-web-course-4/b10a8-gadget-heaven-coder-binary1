import { useContext, useEffect, useState } from "react";
import CommonBanner from "../CommonBanner/CommonBanner";
import { GadgetContext } from "../Root/Root";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { getCartList, getWishList } from "../../utilities/addToDb";
import DashBoardItems from "../DashBoardItems/DashBoardItems";

const DashBoard = () => {
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
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
            <h2 className="text-black font-bold text-2xl mb-6  text-center lg:text-left">
              Cart
            </h2>
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
            <h2 className="text-black font-bold text-2xl mb-6  text-center lg:text-left">
              Wishlist
            </h2>
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
