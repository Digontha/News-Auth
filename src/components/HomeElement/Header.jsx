import moment from "moment/moment";
import logo from "../../../public/logo.png"

const Header = () => {
    return (
        <div className="text-center space-y-4 py-10">
              <img className="mx-auto" src={logo} alt="" />
              <p>Journalism Without Fear or Favour</p>
              <p>{moment().format("dddd, MMMM D , YYYY")}</p>
        </div>
    );
};

export default Header;