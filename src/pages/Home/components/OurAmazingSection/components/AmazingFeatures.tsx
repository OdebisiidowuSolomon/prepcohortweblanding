export const AmazingFeatures = () => {
  return (
    <div className="col-xl-6 border border-gray-300" id="amazingFeaturesId">
      <div className="flex w-full py-4">
        <AmazingFeaturesTopBtn />
        <AmazingFeaturesTopBtn />
      </div>
    </div>
  );
};

const AmazingFeaturesTopBtn = () => {
  return (
    <div className="bg-[#1F4497] rounded-2xl px-4 py-3 mr-3">
      <p className="text-white text-xl font-semibold p-0 m-0">
        Amazing Features
      </p>
    </div>
  );
};
