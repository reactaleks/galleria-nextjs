"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { SlideShowContext } from "./ContextProviderComponent";
import { DataContext } from "./ContextProviderComponent";

export default function NavBar() {
  const { slideShow, startSlideShow, slideShowIndex, restartSlideShow } = useContext(SlideShowContext);
  const data = useContext(DataContext);
  return (
    <nav className="h-[10vh] w-full xl:w-[90%] xl:mx-auto border border-x-0 border-t-0 border-b-2 border-[#E5E5E5] flex justify-between">
      <div className=" flex flex-row items-center justify-between w-[90%] xl:w-full mx-auto">
        <Link href={"/"} className="">
          <div className="w-[113px] h-[32px] xl:w-[169px] xl:h-[48px]">
            <Image src={'/assets/shared/logo.svg'} width={170} height={48} alt="Company logo"/>
    
          </div>
        </Link>
        <Link
          className="text-[9px] xl:text-[12px] font-baskerville_bold tracking-[1.93px] uppercase text-gray-main hover:text-black"
          href={`/art/${data[0].name}`}
          onClick={slideShowIndex == data.length - 1 ? restartSlideShow : startSlideShow}
          
        >
          {slideShow ? "Stop slideshow" : "Start slideshow"}
        </Link>
      </div>
    </nav>
  );
}
