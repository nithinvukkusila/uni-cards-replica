import logo from "../assets/images/logo.jpeg";
const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="paycheck">
        <button className="btn">uni paychek</button>
      </div>
    </div>
  );
};

export default Navbar;
