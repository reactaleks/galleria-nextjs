"use client";
import { useContext, useState, useEffect } from "react";
import {
  DataContext,
  LightShowContext,
  LightShowContextProvider,
  SlideShowContext,
} from "@/components/ContextProviderComponent";
import ViewImage from "@/components/ViewImageComponent";
import SlideShow from "@/components/SlideShowComponent";
import Image from "next/image";
import LightShow from "@/components/LightShowComponent";

export default function Page({ params }: { params: { slug: string } }) {
  // Set context
  const data = useContext(DataContext);
  const lighShow = useContext(LightShowContext);
  const { slideShow, startSlideShow } = useContext(SlideShowContext);
  // States for data and data index
  const [dataIndex, setDataIndex] = useState(0);
  const [pageData, setPageData] = useState(data[dataIndex]);
  // Get page title from slug by replacing %20 with empty space
  const pageTitle = params.slug.replace(/%20/g, " ");
  // Do stuff when loaded
  useEffect(() => {
    getDataPage();
  }, []);

  // : find data index
  const getDataPage = () => {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element.name === pageTitle) {
        setDataIndex(i);
        setPageData(Object.values(data)[i]);
      }
    }
  };

  // : increment or decrement page index
  const updateIndex = (increment: boolean) => {
    const newIndex = increment ? dataIndex + 1 : dataIndex - 1;
    if (newIndex >= 0 && newIndex < data.length) {
      setDataIndex(newIndex);
      setPageData(data[newIndex]);
    }
  };

  // : slideshow
  if (slideShow) {
    if (dataIndex < data.length - 1) {
      setTimeout(() => {
        setDataIndex(dataIndex + 1);
        setPageData(data[dataIndex + 1]);
      }, 1000);
    }
  }

  return (
    <div className="w-[100vw] mx-auto pt-6 ">
      <div className="w-[90%] mx-auto">
        <div className="relative">
          <Image
            src={pageData?.images.thumbnail}
            width={1000}
            height={1000}
            alt=""
            className=""
          />
          <LightShowContextProvider>
            <LightShow imageUrl={pageData?.images.gallery} />
            <ViewImage />
          </LightShowContextProvider>
          <div className="absolute -bottom-16">
            <div className="w-[280px] h-[133px] flex flex-col bg-white justify-center">
              <div className="text-[24px] font-bold text-[#7D7D7D]">{pageData?.name}</div>
              <div className="text-[15x] text-[#7D7D7D]">{pageData?.artist.name}</div>
            </div>

            <div className="w-[64px] h-[64px] absolute left-0">
              <Image
                src={pageData?.artist.image}
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="text-[100px] font-bold text-[#F3F3F3] text-end relative">
          <div className="absolute right-0 top-16">{pageData?.year}</div>
        </div>

        <div className="text-[14px] leading-[28px] mt-44">
          {pageData?.description}
        </div>

        <div className="uppercase underline text-[9px] tracking-[1.93px] text-[#7D7D7D] mt-12">
          <a href={pageData?.source} target="_blank">
            Go to source
          </a>
        </div>
      </div>

      <SlideShow
        title={pageData?.name}
        artist={pageData?.artist.name}
        currentDataIndex={dataIndex}
        updateDataIndex={updateIndex}
      />
    </div>
  );
}
