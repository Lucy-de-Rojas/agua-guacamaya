import Head from "next/head";


import TopBar from "./topBar";
import BottomNav from "./bottomNav";





export default function Layout ({children}) {






return (<div className="text-center overflow-x-scroll h-[91vh] text-3xl text-white ">

        <TopBar />



{children}


        <BottomNav />
</div>)};