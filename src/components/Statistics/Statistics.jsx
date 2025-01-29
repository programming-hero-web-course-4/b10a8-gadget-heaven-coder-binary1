import BarChart from "../BarChart/BarChart";
import CommonBanner from "../CommonBanner/CommonBanner";

const Statistics = () => {
  return (
    <div className="bg-base-200 h-full">
      <CommonBanner pageName="Statistics"></CommonBanner>
      <div className="my-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 mx-5">
          Statistics
        </h2>
        <BarChart></BarChart>
      </div>
    </div>
  );
};

export default Statistics;
