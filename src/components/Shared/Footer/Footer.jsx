import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import logo from "../../../assets/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="bg-[#1F2937] text-white text-center p-6 md:p-12 space-y-3 md:w-1/2">
          <h4 className="text-3xl">CONTACT US</h4>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="bg-[#111827] text-white text-center p-6 md:p-12 space-y-3 md:w-1/2">
          <div className="flex justify-center items-center gap-3">
            <img
              className="h-8 w-8 justify-center items-center"
              src={logo}
              alt=""
            />
            <p className="text-2xl font-bold">BISTRO BOSS</p>
          </div>
          <h4 className="text-3xl">Follow US</h4>
          <p>Join us on social media</p>
          <div className="flex justify-center items-center gap-3 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center bg-black dark:text-gray-400">
        © {currentYear} Bistro Boss Ltd. | Md. Shakil Hossain | All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
