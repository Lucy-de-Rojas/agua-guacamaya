import TopBar from "./topBar";
import Head from "next/head";

import {  useState  } from "react";





export default function Layout ({children}) {






return (<div className="text-center">



        <TopBar />



{children}


</div>)};