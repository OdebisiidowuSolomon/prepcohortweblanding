export const DownloadMobileVersionButtons = ({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) => {
  return (
    <div className="flex bg-black flex-row w[168px] p-[10px] items-center rounded-md mr-3">
      <div className="w-[32px] h-[32px] mr-1">
        <img
        //   src="/images/logos_google-play-icon.png"
          src={imageUrl}
          alt="logos_google-play-icon"
          className="h-full w-full"
        />
      </div>
      <div className="flex-row justify-between items-center mx-2">
        <p className="text-sm text-white p-0 m-0">GET IT ON</p>
        <p className="text-sm text-white p-0 m-0 font-semibold">{title}</p>
      </div>
    </div>
  );
};

// {/* <img src="/images/cib_apple.png" alt="logos_google-play-icon" /> */}
