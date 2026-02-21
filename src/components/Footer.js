import Logo from "../utils/img/logo_footer.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="text-center p-4">
        <img
          src={Logo}
          alt="Abdul Rahim Nagori Logo"
          className="mx-auto mb-2"
        />
        &copy; {new Date().getFullYear()} Abdul Rahim Nagori. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
