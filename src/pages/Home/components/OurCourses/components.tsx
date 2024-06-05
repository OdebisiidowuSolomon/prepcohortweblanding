export const courseData = [
  { id: 1, imgSrc: "/images/waec-img.png", label: "WAEC" },
  { id: 2, imgSrc: "/images/jamb-img.png", label: "JAMB" },
  { id: 3, imgSrc: "/images/ielts-img.png", label: "IELTS" },
  { id: 4, imgSrc: "/images/jamb-img.png", label: "NABTEB" },
  { id: 5, imgSrc: "/images/neco-img.png", label: "NECO" },
];

export const _CourseItem = ({
  imageUrl,
  label,
}: {
  imageUrl: string;
  label: string;
}) => {
  return (
    <div className="item bg-white">
      <div className="category-one__item flex flex-col items-center">
        <div className="w-[230px] h-[150px]">
          <img
            src={imageUrl}
            alt={imageUrl}
            className="object-contain"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <p className="p-0 m-0">{label}</p>
      </div>
    </div>
  );
};

export const CourseItem = ({
  imageUrl,
  label,
  institutionName,
}: {
  imageUrl: string;
  label: string;
  institutionName: string;
}) => {
  return (
    <div className="item bg-white w-[300px]">
      <div className="category-one__item">
        <div className="w-full h-[150px]">
          <img
            src={imageUrl}
            alt={imageUrl}
            className="object-contain"
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center my-3">
            <div>
              <p className="p-0 m-0 font-medium">{label}</p>
              <p className="p-0 m-0 text-sm">{institutionName}</p>
            </div>
            <span className="bg-green-400 text-[12px] text-white p-1 font-medium">New</span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <p className="p-0 m-0 text-sm">5.0</p>
              <div className="flex flex-row items-center ml-3">
                <i className="fa fa-star text-yellow-300 text-sm"></i>
                <i className="fa fa-star text-yellow-300 text-sm"></i>
                <i className="fa fa-star text-yellow-300 text-sm"></i>
                <i className="fa fa-star text-yellow-300 text-sm"></i>
                <i className="fa fa-star text-yellow-300 text-sm"></i>
              </div>
            </div>
            <div className="flex items-center">
              <i className="fa fa-users text-sm mr-2"></i>
              <p className="p-0 m-0">202</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
