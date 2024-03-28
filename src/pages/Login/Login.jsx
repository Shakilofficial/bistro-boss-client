import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
    LoadCanvasTemplate,
    loadCaptchaEnginge,
    validateCaptcha,
} from "react-simple-captcha";
import loginBg from "../../assets/others/authentication.png";
import loginImg from "../../assets/others/authentication2.png";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Log In</title>
      </Helmet>
      <div className="my-10" style={{ backgroundImage: `url(${loginBg})` }}>
        <div className="px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="w-full md:w-1/2 mx-auto">
            <img src={loginImg} alt="" />
          </div>
          <div className="w-full md:w-1/2 py-16 md:ml-6">
            <h3 className="text-center font-bold text-4xl">Login</h3>
            <div>
              <form className="py-10 mx-12">
                <div className="mb-2">
                  <label className="text-lg font-semibold mb-2">Email</label>
                  <input
                    className="text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded-lg"
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    required
                  />
                </div>
                <div>
                  <label className="text-lg font-semibold mb-2">Password</label>
                  <input
                    className="mb-4 text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded-lg"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <div className="mb-3">
                  <LoadCanvasTemplate />
                  <input
                    className="mb-4 text-sm w-full px-4 py-3 border border-solid border-gray-300 rounded-lg"
                    type="text"
                    onBlur={handleValidateCaptcha}
                    name="captcha"
                    placeholder="Type here"
                    required
                  />
                </div>
                <input
                  disabled={disabled}
                  className="btn px-2 py-3 w-full bg-[#e39e37b2] hover:bg-[#a97f41b2]  text-lg text-white font-semibold rounded-lg"
                  type="submit"
                  value="Log in"
                />

                <div className="text-red-500 text-center text-sm mt-1"></div>
              </form>
              <div className="">
                <div className="font-semibold text-slate-500 text-center">
                  Do not have an account?
                  <Link
                    to="/signUp"
                    className="ml-2 text-[#b06a00] hover:underline hover:underline-offset-4"
                  >
                    SignUp
                  </Link>
                </div>
                <h3 className="text-lg mt-4 mb-1 font-semibold text-center">
                  Or Sign In with
                </h3>
                <div className="flex justify-center items-center space-x-3">
                  <button className="p-2 border-2 border-[#b06a00] rounded-full">
                    <FaFacebookF />
                  </button>
                  <button className="p-2 border-2 border-[#b06a00] rounded-full">
                    <FaGoogle />
                  </button>
                  <button className="p-2 border-2 border-[#b06a00] rounded-full">
                    <FaGithub />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
