/* eslint-disable react/prop-types */
import { Parallax } from "react-parallax";

const Cover = ({ img, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[550px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full  px-4 pt-12 md:px-48 bg-black bg-opacity-60 h-[250px] uppercase">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5 text-xl font-semibold">{subtitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
