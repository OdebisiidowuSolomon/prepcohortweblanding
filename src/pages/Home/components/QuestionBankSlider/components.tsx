import { TruncateText } from "../../../../libs/truncateText";

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
  description,
}: {
  imageUrl: string;
  label: string;
  description: string;
}) => {
  return (
    <div className="item bg-white max-w-[80%] min-w-[300px] rounded-md overflow-hidden">
      <div className="category-one__item">
        <div className="w-full h-[150px] bg-[#1F4497] flex-col p-4 justify-center items-center box-border">
          <div className="rounded-full w-[85px] h-[85px] mx-auto flex justify-center items-center bg-white mb-2">
            <p className="text-2xl p-0 m-0 text-center font-semibold text-[#1F4497]">
              {label[0]}
            </p>
          </div>
          <p className="p-0 m-0 text-center text-white font-medium">{label}</p>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-center">
            <p className="p-0 m-0 text-sm font-semibold text-[#1F4497]">
              {TruncateText(description, 19)}
            </p>
            <div className="flex items-center">
              <div className="flex flex-row mr-3 items-center">
                <i className="fa fa-star text-yellow-300 text-[12px]"></i>
                <i className="fa fa-star text-yellow-300 text-[12px]"></i>
                <i className="fa fa-star text-yellow-300 text-[12px]"></i>
                <i className="fa fa-star text-yellow-300 text-[12px]"></i>
                <i className="fa fa-star text-yellow-300 text-[12px]"></i>
              </div>
              <p className="p-0 m-0 text-sm font-semibold text-black">5.0</p>
            </div>
          </div>

          <div className="mt-4 mb-2">
            <QuestionBankItemBottomItem
              leftText="Total Attempts"
              rightText="10"
              iconName="users"
            />
            <QuestionBankItemBottomItem
              leftText="Average Score"
              rightText="100%"
              iconName="percent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const QuestionBankItemBottomItem = ({
  leftText,
  rightText,
  iconName,
}: {
  leftText: string;
  rightText: string;
  iconName: string;
}) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center">
        <i
          className={`fa fa-${iconName} text-sm mr-2 bg-[#1F4497] text-white p-[6px] rounded-full`}
        ></i>
        <p className="p-0 m-0 text-sm font-semibold text-black">{leftText}: </p>
      </div>
      <p className="text-sm p-0 m-0 font-semibold text-black">{rightText}</p>
    </div>
  );
};
