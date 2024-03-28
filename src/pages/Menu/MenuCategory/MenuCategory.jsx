/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import MenuItem from "../../../components/MenuItem/MenuItem";
import Cover from "../../../components/Shared/Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-20 my-5">
      {title && (
        <Cover
          img={img}
          title={title}
          subtitle="Would you like to try a dish?"
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-sm border-0 border-b-2 btn-outline btn-warning">
            ORDER YOUR FAVORITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
