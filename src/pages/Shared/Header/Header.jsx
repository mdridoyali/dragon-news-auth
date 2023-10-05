import logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center mt-5">
      <img className="mx-auto" src={logo} />
      <p>journalism without fear of favour</p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
