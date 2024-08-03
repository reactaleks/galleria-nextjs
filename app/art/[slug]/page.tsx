"use client";
import { useContext } from "react";
import { DataContext } from "@/components/ContextProviderComponent";
import SlideShow from "@/components/SlideShowComponent";
import Image from "next/image";
export default function Page({ params }: { params: { slug: string } }) {
  // Set context
  const data = useContext(DataContext);
  // Get page title from slug by replacing %20 with empty space
  const pageTitle = params.slug.replace(/%20/g, " ");
  // Get page data based on apge title
  const pageData = Object.values(data).find((obj) => obj.name === pageTitle);
  // Find index of data in data object
  const getDataIndex = () => {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];

      if (element.name === pageTitle) {
        return i;
      }
    }
  };

  return (
    <div>
      <Image src={pageData?.images.gallery} width={1000} height={1000} alt="" />
      <div>
        view image
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fillRule="nonzero">
            <path d="M7.714 0l1.5 1.5-2.357 2.357 1.286 1.286L10.5 2.786l1.5 1.5V0zM3.857 6.857L1.5 9.214 0 7.714V12h4.286l-1.5-1.5 2.357-2.357zM8.143 6.857L6.857 8.143 9.214 10.5l-1.5 1.5H12V7.714l-1.5 1.5zM4.286 0H0v4.286l1.5-1.5 2.357 2.357 1.286-1.286L2.786 1.5z" />
          </g>
        </svg>
      </div>
      <div>{pageData?.name}</div>
      <div>{pageData?.artist.name}</div>

      <div>
        <Image src={pageData?.artist.image} width={500} height={500} alt="" />
      </div>

      <div>{pageData?.year}</div>
      <div>{pageData?.description}</div>
      <div>
        <a href={pageData?.source} target="_blank">
          Go to source
        </a>
      </div>

      <SlideShow title={pageData?.name} artist={pageData?.artist.name} />
    </div>
  );
}
