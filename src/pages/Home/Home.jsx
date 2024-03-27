import AboutBanner from "../../components/Banner/AboutBanner";
import Banner from "../../components/Banner/Banner";
import CallUsBanner from "../../components/Banner/CallUsBanner";

const Home = () => {
  return (
    <div className="space-y-24">
      <Banner />
      <h1 className="text-3xl font-bold underline">This is Home</h1>
      <AboutBanner />
      <CallUsBanner />
    </div>
  );
};

export default Home;
