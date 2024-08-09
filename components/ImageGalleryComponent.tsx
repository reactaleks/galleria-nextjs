"use client";
import {useContext, useEffect } from "react";
import {
  DataContext,
  LightShowContextProvider,
  SlideShowContext,
} from "./ContextProviderComponent";
import Thumbnail from "./ThumbnailComponent";
import LightShow from "./LightShowComponent";
import { motion } from "framer-motion";

export default function ImageGallery() {
  useEffect(() => {
    if (slideShow) {
      startSlideShow();
    }
  }, []);
  const data = useContext(DataContext);
  const { slideShow, startSlideShow } = useContext(SlideShowContext);

  const galleryItems = data.map((item, key) => {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          key={key}
          className="md:h-auto p-2 md:w-full xl:w-auto aspect-auto md:p-1 "
        >

          <Thumbnail
            heading={item.name}
            artist={item.artist.name}
            thumbnail={item.images.gallery}

          />

          <LightShowContextProvider>
            <LightShow imageUrl={item.images.hero.large} />
          </LightShowContextProvider>
        </motion.div>
    );
  });
  return (
    <div className=" w-[90vw]   mx-auto md:columns-2 md:gap-0 xl:columns-4 xl:gap-6 pb-6 md:pt-6">
      {galleryItems}
    </div>
  );
}
