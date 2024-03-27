const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center text-amber-600 space-y-5 my-10 md:w-4/12 mx-auto">
      <h6 className="text-xl font-semibold">--- {subHeading} ---</h6>
      <h2 className="text-4xl font-bold border-y-4 py-4">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
