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

  useEffect(() => {
  // : slideshow
  if (slideShow) {
    if (dataIndex < data.length - 1) {
      const timeout = setInterval(() => {
        setDataIndex(dataIndex + 1);
        setPageData(data[dataIndex + 1]);
      }, 1000);
      return () => {
        clearInterval(timeout)
      }
    } else {
      startSlideShow()
    }
  } 



  }, [slideShow, dataIndex, data])
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


  return (
    <div className="w-full min-h-[90vh] pt-6  md:flex md:flex-col md:justify-between">
      <div className="w-[90%] md:h-auto m-auto xl:flex ">
        <div className="relative xl:w-[50vw]">
          <Image
            src={pageData?.images.gallery}
            width={1000}
            height={1000}
            alt=""
            className="md:w-[475px] md:h-[560px] relative"
          />
          <LightShowContextProvider>
            <LightShow imageUrl={pageData?.images.gallery} />
            <ViewImage />
          </LightShowContextProvider>
          <div className="absolute -bottom-16 md:left-64 md:-top-1 ">
            <div className="w-[280px] h-[133px] md:w-[445px] md:h-[302px] flex flex-col bg-white justify-center md:justify-start md:items-start md:p-12 ">
              <div className="text-[24px] md:text-[56px] md:leading-[64px] font-bold text-gray-main md:text-[#000000]">{pageData?.name}</div>
              <div className="text-[15x] text-gray-main md:text-left">{pageData?.artist.name}</div>
            </div>

            <div className="w-[64px] h-[64px] md:w-[128px] md:h-[128px] absolute left-0 md:left-64 md:bottom-50 xl:bottom-0 xl:left-56">
              <Image
                src={pageData?.artist.image}
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
        </div>



        <div className="text-[14px] leading-[28px] text-[#7D7D7D] mt-44 md:mt-32 md:w-[60vw] xl:w-[350px] md:mx-auto md:leading-[28px] relative">
          <div className="text-[100px] md:text-[200px] opacity-25 absolute -top-12 right-0 md:right-auto md:-left-24 xl:left-auto">{pageData?.year}</div>
          <div className="relative">{pageData?.description}</div>
          <div className="uppercase underline text-[9px] tracking-[1.93px] text-gray-main mt-12">
          <a href={pageData?.source} target="_blank">
            Go to source
          </a>
        </div>
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
