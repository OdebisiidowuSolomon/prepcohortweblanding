export const questionBankData = [
  { id: 1, imgSrc: "/images/waec-img.png", label: "WAEC" },
  { id: 2, imgSrc: "/images/jamb-img.png", label: "JAMB" },
  { id: 3, imgSrc: "/images/ielts-img.png", label: "IELTS" },
  { id: 4, imgSrc: "/images/jamb-img.png", label: "NABTEB" },
  { id: 5, imgSrc: "/images/neco-img.png", label: "NECO" },
];

export const QuestionBankItem = ({
  imageUrl,
  label,
}: {
  imageUrl: string;
  label: string;
}) => {
  return (
    <div className="item bg-white w-[300px] rounded-md overflow-hidden">
      <div className="category-one__item">
        <div className="w-full h-[150px] bg-[#1F4497] flex-col p-4 justify-center items-center box-border">
          <div className="rounded-full w-[85px] h-[85px] mx-auto flex justify-center items-center bg-white mb-2">
            <p className="text-2xl p-0 m-0 text-center font-semibold text-[#1F4497]">
              M
            </p>
          </div>
          <p className="p-0 m-0 text-center text-white font-medium">
            WAEC 2002 MAY/JUNE
          </p>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center">
            <p className="p-0 m-0 text-sm font-semibold text-[#1F4497]">
              English Language
            </p>
            <div className="flex items-center">
              <i className="fa fa-star ml-3 text-yellow-300 text-sm"></i>
              <p className="p-0 m-0 text-sm font-semibold text-black">4.5</p>
            </div>
          </div>

          <div className="mt-4 mb-2">
            <QuestionBankItemBottomItem />
            <QuestionBankItemBottomItem />
          </div>
        </div>
      </div>
    </div>
  );
};

const QuestionBankItemBottomItem = () => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center">
        <i className="fa fa-users text-sm mr-2 bg-[#1F4497] text-white p-[6px] rounded-full"></i>
        <p className="p-0 m-0 text-sm font-semibold text-black">
          Total Attempt:{" "}
        </p>
      </div>
      <p className="text-sm p-0 m-0 font-semibold text-black">12134</p>
    </div>
  );
};
