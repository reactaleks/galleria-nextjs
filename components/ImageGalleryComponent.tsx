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
      <div key={key} className="mt-6 ">
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
  
  return <div className="flex flex-col w-[90vw] mx-auto pb-6">{galleryItems}</div>;
}
