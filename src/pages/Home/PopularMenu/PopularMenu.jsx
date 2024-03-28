import { useEffect, useState } from "react";

import MenuItem from "../../../components/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="max-w-7xl mx-auto">
      <SectionTitle
        subHeading="Check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="mt-6 flex justify-center items-center">
        <button className="btn btn-sm border-0 border-b-2 btn-outline btn-warning">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
