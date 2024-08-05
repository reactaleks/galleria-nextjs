interface PropTypes {
  title: string | undefined;
  artist: string | undefined;
  updateDataIndex: number;
}

export default function SlideShow({
  title,
  artist,
  currentDataIndex,
  updateDataIndex,
}: PropTypes) {

    const slideShowProgress = currentDataIndex/14 * 100

  return (
    <div className="flex w-full h-[72px] justify-start items-center mt-36 flex-col">
      <div className="w-full h-[1%] bg-[#979797] z-0 opacity-50">
        <div className="w-[10%] h-full bg-[#000000] z-10" style={{width: slideShowProgress + '%'}}></div>
      </div>
      <div className="flex w-full h-full justify-between items-center px-6">
        <div>
          <div className="text-[14px] font-baskerville_bold ">{title}</div>
          <div className="text-[10px] opacity-75">{artist}</div>
        </div>

        <div className="flex w-[20%] justify-between">
          <button
            onClick={() => {
              updateDataIndex(false);
            }}
            disabled={currentDataIndex == 0}
            className="disabled:opacity-25"
          >
            <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#000" fill="none" fillRule="evenodd">
                <path
                  d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                  strokeWidth="2"
                />
                <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
              </g>
            </svg>
          </button>
          <button
            onClick={() => {
              updateDataIndex(true);
            }}
            disabled={currentDataIndex == 14}
            className="disabled:opacity-25"
          >
            <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg">
              <g stroke="#000" fill="none" fillRule="evenodd">
                <path
                  d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                  strokeWidth="2"
                />
                <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
