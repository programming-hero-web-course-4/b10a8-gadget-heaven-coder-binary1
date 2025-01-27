import { useContext } from "react";
import { GadgetContext } from "../Root/Root";
import Gadget from "../Gadget/Gadget";
import { useParams } from "react-router-dom";

const CategoryGadget = () => {
  const gadgets = useContext(GadgetContext);
  const param = useParams();
  const filteredGadgets = gadgets[1].filter(
    (gadget) => gadget.category === param.category
  );

  return (
    <div className="grid lg:grid-cols-3 justify-items-center gap-6 grow">
      {filteredGadgets.length > 0 ? (
        filteredGadgets.map((gadget) => (
          <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
        ))
      ) : (
        <h2 className="text-[#9538E2] text-2xl font-bold card bg-base-100 shadow-sm p-5 mx-5">
          No Products Available
        </h2>
      )}
    </div>
  );
};

export default CategoryGadget;
