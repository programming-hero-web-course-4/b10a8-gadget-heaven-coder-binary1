import { useContext } from "react";
import { GadgetContext } from "../Root/Root";
import Gadget from "../Gadget/Gadget";
import { useParams } from "react-router-dom";

const AllGadget = () => {
  const gadgets = useContext(GadgetContext);

  return (
    <div className="grid lg:grid-cols-3 justify-items-center gap-6 grow">
      {gadgets[1].map((gadget) => (
        <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
      ))}
    </div>
  );
};

export default AllGadget;
