"use client";

import { ReactNode, createContext, useState } from "react";
import data from "../data/data.json";

interface PropTypes {
  children?: ReactNode;
}

export const DataContext = createContext(data);
export const LightShowContext = createContext({isOpen: false, openLightShow: () => {}});
export const SlideShowContext = createContext({slideShow: false, startSlideShow: () => {}});

export function ContextProvider({ children }: PropTypes) {
  return <>{children}</>;
}

export function LightShowContextProvider({ children }: PropTypes) {
  const [isOpen, setIsOpen] = useState(false);

  const openLightShow = () => setIsOpen(!isOpen);

  return (
    <LightShowContext.Provider value={{ isOpen, openLightShow }}>
      <>{children}</>
    </LightShowContext.Provider>
  );
}

export function SlideShowContextProvider({ children }: PropTypes) {
  const [slideShow, setSlideShow] = useState(false);
  const startSlideShow = () => setSlideShow(!slideShow);
  return (
    <SlideShowContext.Provider value={{slideShow, startSlideShow}}>
      <>{children}</>
    </SlideShowContext.Provider>
  )
}
