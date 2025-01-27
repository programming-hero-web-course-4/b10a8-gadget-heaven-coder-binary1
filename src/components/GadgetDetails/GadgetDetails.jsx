import GadgetDetail from "../GadgetDetail/GadgetDetail";

const GadgetDetails = () => {
  return (
    <div className="bg-base-200">
      <div className="bg-[#9538E2] text-center text-white space-y-4 pt-8 pb-12 lg:pb-[230px]">
        <h2 className="text-3xl font-bold">Product Details</h2>
        <p className="lg:w-2/6 mx-auto text-sm p-4">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <GadgetDetail></GadgetDetail>
    </div>
  );
};

export default GadgetDetails;
