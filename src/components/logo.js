// import { useState,createContext,  useContext } from "react";

import { logoCirclesFULL } from "@/utils/logoCirclesFull";




export default function Logo ({menuOpen, setMenuOpen}) {




        let circlesTransition = "transition-all duration-700  ease-linear";


        // svg (logo) size:
        let size = "120px";


        // original size:  18.549    12.816    48.653    59.058
        let viewBox1 = "12 " // x pos
        let viewBox2 = "-2 "   // y   pos
        let viewBox3 = "70 "    // width
        let viewBox4 = "80"    // height
        let viewBox = viewBox1 + viewBox2 + viewBox3 + viewBox4


        function handleClick() {
              logoCirclesFULL(menuOpen, setMenuOpen);
        }








return (<div className="">


<svg id="Logo" width={size} height="150px" viewBox={viewBox} onClick={handleClick} className="" >



<circle id="circle1" fill="#ffffff" stroke="#2E3192" cx="29.201" cy="24.959" r="9.066" className={circlesTransition} />

<circle id="circle2" fill="#FFFFFF" stroke="#2E3192" cx="59.667" cy="19.607" r="5.352" className={circlesTransition} />



<circle id="circle3" fill="#FFFFFF" stroke="#2E3192"  cx="29.201" cy="48.597" r="5.352" className={circlesTransition} />

<circle id="circle4" fill="#FFFFFF" stroke="#2E3192" cx="54.879" cy="58.89" r="11.183" className={circlesTransition}   />

</svg>




</div>)};