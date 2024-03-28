import AboutBanner from "../../components/Banner/AboutBanner";
import Banner from "../../components/Banner/Banner";
import CallUsBanner from "../../components/Banner/CallUsBanner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Recommend from "./Recommend/Recommend";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="space-y-24">
      <Banner />
      <Category />
      <AboutBanner />
      <CallUsBanner />
      <Recommend />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
