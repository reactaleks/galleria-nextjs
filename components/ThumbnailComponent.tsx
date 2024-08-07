import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface PropTypes {
  heading: string;
  artist: string;
  thumbnail: string;
}

export default function Thumbnail({
  heading,
  artist,
  thumbnail,
}: PropTypes) {
  const randomSpeed = Math.random() * (0.5 - 0.1) + 0.1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      transition={{ duration: randomSpeed.toFixed(2) }}

    >
      <Link
        href={`/art/${heading}`}
        className="relative  mx-auto grid overflow-hidden"
      >
        <Image
          src={thumbnail}
          alt=""
          width={1000}
          height={1000}
          className="-z-10 relative aspect-auto"
          priority
        />
        <motion.div
          layout
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="z-10 absolute bottom-0 text-white mx-6 mb-6 w-[80%] "
        >
          <div className="text-[24px] font-baskerville_bold">{heading}</div>
          <div className="text-[13px]">{artist}</div>

        </motion.div>
      </Link>
    </motion.div>
  );
}
