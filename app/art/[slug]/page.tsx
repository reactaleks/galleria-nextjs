"use client";
import { useContext, useState, useEffect } from "react";
import {
  DataContext,
  LightShowContextProvider,
  SlideShowContext,
} from "@/components/ContextProviderComponent";
import ViewImage from "@/components/ViewImageComponent";
import SlideShow from "@/components/SlideShowComponent";
import Image from "next/image";
import LightShow from "@/components/LightShowComponent";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  // Set context
  const data = useContext(DataContext);
  const { slideShow, startSlideShow, slideShowIndex, setSlideShowIndex } =
    useContext(SlideShowContext);
  // States for data and data index
  const [pageData, setPageData] = useState(data[slideShowIndex]);
  // Get page title from slug by replacing %20 with empty space
  const pageTitle = params.slug.replace(/%20/g, " ");
  const router = useRouter();

  // Do stuff when loaded
  useEffect(() => {
    getDataPage();
  }, []);

  useEffect(() => {
    // : slideshow
    if (slideShow) {
      if (slideShowIndex < data.length - 1) {
        const timeout = setInterval(() => {
          setSlideShowIndex(slideShowIndex + 1);
          setPageData(data[slideShowIndex + 1]);
          router.push(`/art/${data[slideShowIndex + 1].name}`);
        }, 15000);
        return () => {
          clearInterval(timeout);
        };
      } else {
        startSlideShow();
      }
    }
  }, [slideShow, slideShowIndex, data]);
  // : find data index
  const getDataPage = () => {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element.name === pageTitle) {
        setSlideShowIndex(i);
        setPageData(Object.values(data)[i]);
      }
    }
  };

  // : increment or decrement page index
  const updateIndex = (increment: boolean) => {
    const newIndex = increment ? slideShowIndex + 1 : slideShowIndex - 1;
    if (newIndex >= 0 && newIndex < data.length) {
      setSlideShowIndex(newIndex);
      setPageData(data[newIndex]);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 1 }}
        className="w-full h-[auto] xl:h-[80vh] pt-6  md:flex md:flex-col md:justify-between overflow-x-hidden mb-12 lg:mb-0 overflow-hidden"
        key={slideShowIndex}
      >
        <div className="w-[90%] md:h-auto m-auto xl:flex ">
          <div className="relative xl:w-[50vw]">
            <motion.div
              initial={{ opacity: 0, x: -1000 }}
              animate={{ opacity: 100, x: 0 }}
              transition={{ duration: 1 }}
              key={pageData?.name + "-image"}
            >
              <Image
                src={pageData?.images.gallery}
                width={1000}
                height={1000}
                alt=""
                className="md:w-[475px] md:h-[560px] relative"
              />
            </motion.div>

            <LightShowContextProvider>
              <LightShow imageUrl={pageData?.images.gallery} />
              <ViewImage />
            </LightShowContextProvider>
            <div className="absolute -bottom-16 md:left-64 md:-top-1 ">
              <motion.div
                initial={{ x: 1000, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ duration: 1 }}
                className="w-[280px] h-[133px] md:w-[445px] md:h-[302px] flex flex-col bg-white justify-center md:justify-start md:items-start md:p-12 overflow-hidden"
              >
                <motion.div initial={{x:-100, opacity:0}} animate={{x:0, opacity:100}} transition={{duration:2.2}} className="text-[24px] md:text-[56px] md:leading-[64px] font-bold text-gray-main md:text-[#000000]">
                  {pageData?.name}
                </motion.div>
                <motion.div initial={{x:100, opacity:0}} animate={{x:0, opacity:100}} transition={{duration:2}} className="text-[15x] text-gray-main md:text-left">
                  {pageData?.artist.name}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                transition={{ duration: 1.5 }}
                className="w-[64px] h-[64px] md:w-[128px] md:h-[128px] absolute left-0 md:left-64 md:bottom-50 xl:bottom-0 xl:left-56"
              >
                <Image
                  src={pageData?.artist.image}
                  width={500}
                  height={500}
                  alt=""
                />
              </motion.div>
            </div>
          </div>

          <div className="text-[14px] leading-[28px] text-[#7D7D7D] mt-44 md:mt-32 md:w-[60vw] xl:w-[30vw] xl:h-[25vh] md:mx-auto md:leading-[28px] relative ">
            <motion.div
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="text-[100px] opacity-25 md:text-[200px] absolute -top-12 right-0 md:right-auto md:-left-24 xl:left-auto "
            >
              {pageData?.year}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ duration: 3 }}
              className=" xl:h-[20vh]"
            >
              {pageData?.description}
            </motion.div>
            <div className="uppercase underline text-[9px] tracking-[1.93px] text-gray-main mt-12">
              <a href={pageData?.source} target="_blank">
                Go to source
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <SlideShow
        title={pageData?.name}
        artist={pageData?.artist.name}
        currentDataIndex={slideShowIndex}
        updateDataIndex={updateIndex}
      />
    </>
  );
}
