import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div
      className="relative bg-fixed bg-cover bg-center h-[800px]"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70">
        <SectionTitle
          subHeading="Check it out"
          heading="Featured Item"
        ></SectionTitle>
        <div className="max-w-4xl p-8 mx-auto md:flex gap-6 justify-center items-center">
          <div>
            <img className="w-[950px]" src={featuredImg} alt="" />
          </div>
          <div className="space-y-2 p-8 text-white">
            <p className="font-semibold">March 20, 2023</p>
            <p className="font-semibold uppercase">WHERE CAN I GET SOME?</p>
            <p className="">
              Indulge your senses at our exquisite restaurant, where culinary
              artistry meets a symphony of flavors. Immerse yourself in a dining
              experience crafted with passion, featuring a fusion of exquisite
              ingredients and expertly curated dishes.
            </p>
            <button className="btn btn-sm border-0 border-b-2 btn-outline btn-warning">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
