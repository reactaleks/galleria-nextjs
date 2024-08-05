"use client";
import { useContext } from "react";
import { DataContext, LightShowContext, LightShowContextProvider } from "./ContextProviderComponent";
import Thumbnail from "./ThumbnailComponent";
import LightShow from "./LightShowComponent";
import ViewImage from "./ViewImageComponent";

export default function ImageGallery() {
  const data = useContext(DataContext);

  const galleryItems = data.map((item, key) => {
    return (
      <div key={key}>
        <Thumbnail
          heading={item.name}
          artist={item.artist.name}
          thumbnail={item.images.thumbnail}
        />
        <LightShowContextProvider>
          <LightShow imageUrl={item.images.gallery}/>
          <ViewImage />
        </LightShowContextProvider>

      </div>
    );
  });
  
  return <>{galleryItems}</>;
}
