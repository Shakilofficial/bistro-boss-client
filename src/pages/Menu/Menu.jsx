import { Helmet } from "react-helmet-async";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Cover from "../../components/Shared/Cover/Cover";
import UseMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title="Our Menu"
        subtitle="Would you like to try a dish?"
      />
      <SectionTitle
        subHeading="Do not Miss"
        heading="Todays Offer"
      ></SectionTitle>
      {/* Offered Menu Item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Desert Menu Item */}
      <MenuCategory
        items={dessert}
        title="desserts"
        img={dessertImg}
      ></MenuCategory>
      {/* Pizza */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>

      {/* Salad*/}
      <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>

      {/* Soup */}
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
