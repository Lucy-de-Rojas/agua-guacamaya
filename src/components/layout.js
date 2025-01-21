import Head from "next/head";


import TopBar from "./topBar";
import BottomNav from "./bottomNav";





export default function Layout ({children}) {






return (<div className="text-center h-screen">

        <TopBar />




<div className="text-center overflow-x-scroll h-[75vh] text-3xl text-white px-5 landscape:h-screen landscape:px-24 landscape:absolute landscape:w-[85%] landscape:right-0 top-5 bottom-0">




{children}

</div>



        <BottomNav />
</div>)};