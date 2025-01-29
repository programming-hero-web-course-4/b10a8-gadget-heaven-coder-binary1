import PropTypes from "prop-types";
import PageTitle from "../PageTitle/PageTitle";

const CommonBanner = ({ pageName }) => {
  return (
    <div className="bg-[#9538E2] text-center text-white space-y-4 pt-8 pb-8">
      <PageTitle title={pageName}></PageTitle>
      <h2 className="text-3xl font-bold">{pageName}</h2>
      <p className="lg:w-2/6 mx-auto text-sm p-4">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
    </div>
  );
};

CommonBanner.propTypes = {
  pageName: PropTypes.string.isRequired,
};
export default CommonBanner;
