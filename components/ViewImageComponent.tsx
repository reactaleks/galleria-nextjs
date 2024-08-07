import { useContext } from "react";
import { LightShowContext } from "./ContextProviderComponent";
import { motion } from "framer-motion";
export default function ViewImage() {
  const { isOpen, openLightShow } = useContext(LightShowContext);
  return (
    <motion.div
      initial={{opacity:0, x:100}}
      animate={{opacity:100, x:0}}
      transition={{duration:2}}
      onClick={openLightShow}
      className="w-[152px] h-[40px] cursor-pointer bg-black hover:bg-white hover:bg-opacity-25  text-white flex items-center justify-around bg-opacity-75 absolute top-4 left-4 z-0 md:bottom-4 md:top-auto"
    >
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF" fillRule="nonzero">
          <path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z" />
        </g>
      </svg>
      <div className="uppercase font-baskerville_bold text-[10px] tracking-[2.14px]">view image</div>
    </motion.div>
  );
}
