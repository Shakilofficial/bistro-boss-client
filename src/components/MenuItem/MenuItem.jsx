/* eslint-disable react/prop-types */
const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex justify-center items-center space-x-5 shadow p-4 rounded-3xl">
      <img
        className="w-[118px] h-[104px]"
        src={image}
        alt=""
        style={{ borderRadius: "0 200px 200px 200px" }}
      />
      <div className="">
        <h3 className="font-semibold text-amber-500 uppercase">
          {name} ------------
        </h3>
        <p>{recipe} </p>
      </div>
      <p className="text-amber-500 font-semibold">${price}</p>
    </div>
  );
};

export default MenuItem;
