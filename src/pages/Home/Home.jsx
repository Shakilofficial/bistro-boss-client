import AboutBanner from "../../components/Banner/AboutBanner";
import Banner from "../../components/Banner/Banner";
import CallUsBanner from "../../components/Banner/CallUsBanner";
import Category from "./Category/Category";

const Home = () => {
  return (
    <div className="space-y-24">
      <Banner />
      <Category />
      <AboutBanner />
      <CallUsBanner />
    </div>
  );
};

export default Home;
