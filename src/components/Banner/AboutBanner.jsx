import bgImage from "../../assets/home/chef-service.jpg";

const AboutBanner = () => {
  return (
    <div
      className="max-w-7xl mx-auto bg-cover bg-center h-[580px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="md:max-w-xl lg:max-w-3xl bg-fixed p-16 mx-auto bg-white h-[340px] text-center relative -bottom-32">
        <h4 className="text-3xl uppercase font-bold md:mt-8 mb-5">
          Bistro Boss
        </h4>
        <p>
          Indulge your senses at our exquisite restaurant, where culinary
          artistry meets a symphony of flavors. Immerse yourself in a dining
          experience crafted with passion, featuring a fusion of exquisite
          ingredients and expertly curated dishes.
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
