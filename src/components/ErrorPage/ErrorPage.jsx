import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="grid place-items-center h-screen">
      <div className="text-center">
        <DotLottieReact
          className="lg:w-[1280px]"
          src="https://lottie.host/5b145017-b42e-4fb5-a1f7-aad690056c0b/XlPkLCmP5V.lottie"
          loop
          autoplay
        />
        <Link to="/">
          <button className="btn btn-primary btn-soft">Back</button>
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
