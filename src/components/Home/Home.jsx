import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
import PageTitle from "../PageTitle/PageTitle";

const Home = () => {
  return (
    <div className="bg-base-200">
      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <Gadgets></Gadgets>
    </div>
  );
};

export default Home;
