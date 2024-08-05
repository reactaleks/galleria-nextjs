import Image from "next/image";
import Link from "next/link";

interface PropTypes {
  heading: string;
  artist: string;
  thumbnail: string;
}

export default function Thumbnail({ heading, artist, thumbnail }: PropTypes) {
  return (
    <Link href={`/art/${heading}`} className="relative w-[90%] mx-auto grid">
      <Image
        src={thumbnail}
        alt=""
        width={1000}
        height={1000}
        className="-z-10 relative"
      />
      <div className="z-10 absolute bottom-0 text-white mx-6 mb-6 w-[80%]">
        <div className="text-[24px] font-baskerville_bold">{heading}</div>
        <div className="text-[13px]">{artist}</div>
      </div>
    </Link>
  );
}
