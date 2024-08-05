"use client";
import { useContext, useState, useEffect } from "react";
import {
  DataContext,
  LightShowContext,
  LightShowContextProvider,
} from "@/components/ContextProviderComponent";
import ViewImage from "@/components/ViewImageComponent";
import SlideShow from "@/components/SlideShowComponent";
import Image from "next/image";
import LightShow from "@/components/LightShowComponent";

export default function Page({ params }: { params: { slug: string } }) {
  // Set context
  const data = useContext(DataContext);
  const lighShow = useContext(LightShowContext);
  // States for data and data index
  const [dataIndex, setDataIndex] = useState(0);
  const [pageData, setPageData] = useState(data[dataIndex]);
  // Get page title from slug by replacing %20 with empty space
  const pageTitle = params.slug.replace(/%20/g, " ");

  // Do stuff when loaded
  useEffect(() => {
    getDataPage();
  }, []);

  // : find data index
  const getDataPage = () => {
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (element.name === pageTitle) {
        setDataIndex(i)
        setPageData(Object.values(data)[i])
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
    <div>
      <Image
        src={pageData?.images.thumbnail}
        width={1000}
        height={1000}
        alt=""
      />

      <LightShowContextProvider>
        <LightShow imageUrl={pageData?.images.gallery} />
        <ViewImage />
      </LightShowContextProvider>

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

      <SlideShow
        title={pageData?.name}
        artist={pageData?.artist.name}
        currentDataIndex={dataIndex}
        updateDataIndex={updateIndex}
      />
    </div>
  );
}
