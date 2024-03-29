import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Social = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <>
      <button className="p-2 border-2 border-[#b06a00] rounded-full">
        <FaFacebookF />
      </button>
      <button
        onClick={handleGoogleSignIn}
        className="p-2 border-2 border-[#b06a00] rounded-full"
      >
        <FaGoogle />
      </button>
      <button className="p-2 border-2 border-[#b06a00] rounded-full">
        <FaGithub />
      </button>
    </>
  );
};

export default Social;
