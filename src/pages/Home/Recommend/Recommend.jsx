import dessert from "../../../assets/menu/dessert-bg.jpeg";
import salad from "../../../assets/menu/salad-bg.jpg";
import soup from "../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Recommend = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <SectionTitle
        subHeading="Should Try"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 max-w-screen-lg mx-8 lg:mx-auto">
        {/* card-1 */}
        <div className="card card-compact h-[440px] w-80 bg-base-100 shadow-xl">
          <figure>
            <img className="h-[260px]" src={salad} alt="food" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-center text-xl font-bold">Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions justify-center">
              <button className="btn btn-sm border-0 border-b-2 btn-outline btn-warning">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* card-2 */}
        <div className="card card-compact h-[440px] w-80 bg-base-100 shadow-xl">
          <figure>
            <img className="h-[260px]" src={dessert} alt="food" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-center text-xl font-bold">Chocolate Mousse</h2>
            <p>
              Dark Chocolate, Cream, utter, Sugar, Eggs, Vanilla Extract, Salt,
              Whipped Cream and Chocolate
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-sm border-0 border-b-2 btn-outline btn-warning">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        {/* card-3 */}
        <div className="card card-compact h-[440px] w-80 bg-base-100 shadow-xl">
          <figure>
            <img className="h-[260px]" src={soup} alt="food" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-center text-xl font-bold">Tomato Basil Soup</h2>
            <p>
              Tomatoes, Basil, Onion, Garlic, Olive Oil, Vegetable or Chicken
              Both, Salt and Pepper, Sugar
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-sm border-0 border-b-2 btn-outline btn-warning">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
