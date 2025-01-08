import Head from "next/head";


import TopBar from "./topBar";
import BottomNav from "./bottomNav";





export default function Layout ({children}) {






return (<div className="text-center">



        <TopBar />
        <BottomNav />



{children}


</div>)};