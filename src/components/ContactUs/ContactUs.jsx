import { SiMinutemailer } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniPhone } from "react-icons/hi2";
import CommonBanner from "../CommonBanner/CommonBanner";

const ContactUs = () => {
  return (
    <div className="h-full">
      <CommonBanner pageName="Contact Us"></CommonBanner>
      <div className="text-center p-10">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-3xl mx-auto">
          <div className="flex justify-center flex-col items-center flex-1 flex-grow">
            <div className=" text-[#F6CC5E] text-5xl">
              <FaLocationDot />
            </div>
            <div>
              <div className="text-[#9FC5E8] stat-value">Address</div>
              <div className="stat-desc text-base">
                2972 Westheimer Rd. Santa Ana,
              </div>
              <div className="stat-desc text-base">Illinois 85486</div>
            </div>
          </div>

          <div className=" flex justify-center flex-col items-center flex-1 flex-grow">
            <div className=" text-purple-400 text-5xl">
              <HiMiniPhone />
            </div>
            <div>
              <div className=" text-[#9FC5E8] stat-value">Phone</div>
              <div className="stat-desc text-base">(405) 555-0128</div>
            </div>
          </div>
          <div className=" flex justify-center flex-col items-center flex-1 flex-grow">
            <div className=" text-red-400 text-5xl">
              <SiMinutemailer />
            </div>
            <div>
              <div className=" text-[#9FC5E8] stat-value">Email</div>
              <div className="stat-desc text-base">hello@example.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
