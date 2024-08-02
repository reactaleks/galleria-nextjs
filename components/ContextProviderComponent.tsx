'use client';

import { ReactNode,createContext } from "react";
import data from '../data/data.json'

interface PropTypes {
    children?: ReactNode
}

export const DataContext = createContext(data);
export function ContextProvider({children}:PropTypes) {

  return <>{children}</>;
}
