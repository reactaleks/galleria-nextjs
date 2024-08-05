"use client";
import { useContext, useEffect } from "react";
import { DataContext, LightShowContext, LightShowContextProvider, SlideShowContext } from "./ContextProviderComponent";
import Thumbnail from "./ThumbnailComponent";
import LightShow from "./LightShowComponent";
import ViewImage from "./ViewImageComponent";

export default function ImageGallery() {
  useEffect(() => {
  }, [])
  const data = useContext(DataContext);
  const { slideShow, startSlideShow } = useContext(SlideShowContext);

  const galleryItems = data.map((item, key) => {
    return (
      <div key={key} className="md:h-auto p-2 md:w-full aspect-auto md:p-1 xl:p-4">
        <Thumbnail
          heading={item.name}
          artist={item.artist.name}
          thumbnail={item.images.thumbnail}
        />
        <LightShowContextProvider>
          <LightShow imageUrl={item.images.gallery}/>
        </LightShowContextProvider>

      </div>
    );
  });
  
  return <div className=" w-[90vw] xl:w-[95vw] mx-auto md:columns-2xs md:gap-0 xl:columns-4xs xl:gap-2 pb-6 md:pt-6">{galleryItems}</div>;
}
