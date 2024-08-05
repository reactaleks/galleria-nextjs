import Image from "next/image";
import { useContext } from "react";
import { LightShowContext } from "./ContextProviderComponent";
interface PropTypes {
  imageUrl: string;
  showLightShow: boolean;
}

export default function LightShow({ imageUrl }: PropTypes) {
  const { isOpen, openLightShow } = useContext(LightShowContext);

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } top-0 left-0 h-screen w-screen  bg-black flex justify-center items-center px-6 bg-opacity-85 z-20`}
    >
      <div className="relative">
        <Image
          src={imageUrl}
          width={1000}
          height={1000}
          alt=""
          className="object-fill xl:max-h-[770px] xl:object-center xl:object-contain"
        
        />
        <div className="absolute text-white -top-12 right-0 font-baskerville_bold text-[14px] tracking-[3px] " onClick={openLightShow}>
          close
        </div>
      </div>
    </div>
  );
}
