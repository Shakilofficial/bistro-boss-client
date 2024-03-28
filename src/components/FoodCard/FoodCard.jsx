/* eslint-disable react/prop-types */
import { FaDollarSign } from "react-icons/fa6";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card card-compact h-[440px] w-80 bg-base-100 shadow-xl">
      <figure>
        <img className="h-[260px]" src={image} alt="food" />
      </figure>
      <p className="absolute right-0 mr-2 mt-4 rounded bg-black px-2 flex justify-center items-center text-lg font-semibold text-amber-300 text-center">
        <FaDollarSign /> {price}
      </p>
      <div className="card-body text-center">
        <h2 className="text-center text-xl font-bold">{name}</h2>
        <p>{recipe}</p>

        <div className="card-actions justify-center">
          <button className="btn btn-sm border-0 border-b-2 btn-outline btn-warning">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
