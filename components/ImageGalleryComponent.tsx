'use client'
import { useContext } from "react";
import { DataContext } from "./ContextProviderComponent";
import Thumbnail from "./ThumbnailComponent";

export default function ImageGallery() {
  const data = useContext(DataContext);
  const galleryItems = data.map((item, key) => {
    return (
      <Thumbnail
        key={key}
        heading={item.name}
        artist={item.artist.name}
        thumbnail={item.images.thumbnail}
      />
    );
  });
  return <>{galleryItems}</>;
}
