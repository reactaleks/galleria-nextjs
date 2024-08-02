'use client'
import { useContext } from "react";
import { DataContext } from "@/components/ContextProviderComponent";
export default function Page({params} : {params:{slug:string}}) {
    const data = useContext(DataContext);
    const pageTitle = params.slug.replace(/%20/g, ' ')
    return <div>Page for: `{pageTitle}`</div>
}