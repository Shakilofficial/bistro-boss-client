import { Helmet } from "react-helmet-async";
import menuImg from "../../assets/menu/banner3.jpg";
import Cover from "../../components/Shared/Cover/Cover";
const Menu = () => {
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
      <h2>This is Menu Page</h2>
    </div>
  );
};

export default Menu;
