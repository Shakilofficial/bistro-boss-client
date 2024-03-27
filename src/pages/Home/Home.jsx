import AboutBanner from "../../components/Banner/AboutBanner";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div className="space-y-24">
      <Banner />
      <h1 className="text-3xl font-bold underline">This is Home</h1>
      <AboutBanner />
    </div>
  );
};

export default Home;
