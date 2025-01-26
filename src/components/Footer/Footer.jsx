const Footer = () => {
  return (
    <div className="mt-24 lg:mx-20">
      <div className="text-center ">
        <h2 className="text-3xl font-bold mb-3">Gadget Heaven</h2>
        <p className="font-medium text-gray-400">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="divider"></div>
      <footer className="footer sm:footer-horizontal justify-around p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
