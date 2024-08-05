import Image from "next/image";
import Link from "next/link";

interface PropTypes {
  heading: string;
  artist: string;
  thumbnail: string;
}

export default function Thumbnail({ heading, artist, thumbnail }: PropTypes) {
  return (
    <Link href={`/art/${heading}`} className="relative w-[90%] mx-auto">
      <Image
        src={thumbnail}
        alt=""
        width={1000}
        height={1000}
        className="-z-10 relative"
      />
      <div className="z-10 text-orange-500 absolute bottom-0">
        <div className="">{heading}</div>
        <div className="">{artist}</div>
      </div>
    </Link>
  );
}
