export const examPlatformData = [
  { id: 1, imgSrc: "/images/waec-img.png", label: "WAEC" },
  { id: 2, imgSrc: "/images/jamb-img.png", label: "JAMB" },
  { id: 3, imgSrc: "/images/ielts-img.png", label: "IELTS" },
  { id: 4, imgSrc: "/images/jamb-img.png", label: "NABTEB" },
  { id: 5, imgSrc: "/images/neco-img.png", label: "NECO" },
];

export const ExamPlatformItem = ({
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
        <p>{label}</p>
      </div>
    </div>
  );
};

// export const _ExamPlatformItemuu = () => {
//   return (
//     <div className="item">
//       <div className="category-one__item">
//         <div
//           className="category-one__wrapper"
//           //   style={{
//           //     backgroundImage: "url(images/category-shape.png)",
//           //   }}
//         >
//           <div className="category-one__thumb">
//             <img
//               decoding="async"
//               src="/images/category-normal-4.png"
//               alt="alt"
//               title="category-normal-4"
//             />
//           </div>
//           <div className="category-one__content">
//             <div className="category-one__icon">
//               {/* <span aria-hidden="true" className="icon-Start-up"></span> */}
//             </div>
//             <h3 className="category-one__title">NECO</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
