import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="lg:mx-5 lg:pt-5">
      <div className="hero bg-[#9538E2] lg:pt-28 pb-16 lg:pb-64 rounded-b lg:rounded-4xl relative">
        <div className="hero-content text-center">
          <div className=" text-white">
            <h1 className="lg:max-w-4xl text-3xl lg:text-5xl font-bold leading-[1.5]">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="lg:ax-w-3xl pt-6 pb-8 text-sm lg:text-base  mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="text-[#9538E2] bg-white font-bold lg:text-xl px-3 lg:px-6 py-2 lg:py-3 rounded-full cursor-pointer hover:scale-90 transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <figure className="w-3/4 lg:w-1/2 mx-auto border-2 bg-white/25 border-white rounded-lg p-1 lg:rounded-4xl lg:p-6 absolute bottom-[220px] lg:bottom-[-220px] 2xl:bottom-[-50px] left-0 right-0">
        <img className="" src={bannerImg} alt="Banner" />
      </figure>
    </div>
  );
};

export default Banner;
