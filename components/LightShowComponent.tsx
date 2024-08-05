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
      className={`${isOpen ? "absolute" : "hidden"} top-0  h-screen w-screen`}
    >
      <div className="relative">
        
      <Image
        src={imageUrl}
        width={1000}
        height={1000}
        alt=""
        className="object-fill"
      />
      <div className="absolute text-white top-0" onClick={openLightShow}>close</div>


      </div>

    </div>
  );
}
