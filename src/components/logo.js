import { useState } from "react";






export default function Logo () {

        const [menuOpen, setMenuOpen] = useState(false);

        let circlesTransition = "transition-all duration-700  ease-linear";



        let size = "170px";

        function handleClick() {

                let circle1 = document.getElementById("circle1");
                let circle2 = document.getElementById("circle2");
                let circle3 = document.getElementById("circle3");
                let circle4 = document.getElementById("circle4");




                if(!menuOpen) {
                        setMenuOpen(!menuOpen);


                        circle1.style.r = "5";
                        circle1.style.cy="13";
                        circle1.style.cx = "31";




                //  cx="59.667" cy="19.607" r="5.352"
                        circle2.style.r = "2.5";
                        circle2.style.cy = "14";
                        circle2.style.cx = "56";



                        // cx="29.201" cy="48.597" r="5.352"
                        circle3.style.r = "4";
                        circle3.style.cy = "40";
                        circle3.style.cx = "28";


                           // cx="54.879" cy="58.89" r="11.183"
                        circle4.style.r = "8";
                        circle4.style.cy = "30";
                        circle4.style.cx = "50";


                }
                else {
                        setMenuOpen(!menuOpen);

                        circle1.style.r = "";
                        circle1.style.cy="";
                        circle1.style.cx = "";


                        //  cx="59.667" cy="19.607" r="5.352"
                        circle2.style.r = "";
                        circle2.style.cy = "";
                        circle2.style.cx = "";


                        // cx="29.201" cy="48.597" r="5.352"
                        circle3.style.r = "";
                        circle3.style.cy = "";
                        circle3.style.cx = "";



                        // cx="54.879" cy="58.89" r="11.183"
                        circle4.style.r = "";
                        circle4.style.cy = "";
                        circle4.style.cx = "";




                }







        }








return (<div className="bg-blue-400">


<svg id="Logo" width={size} height={size} viewBox="0 0 100 100" onClick={handleClick}>



<circle id="circle1" fill="#ffffff" stroke="#2E3192" cx="29.201" cy="24.959" r="9.066" className={circlesTransition} />

<circle id="circle2" fill="#FFFFFF" stroke="#2E3192" cx="59.667" cy="19.607" r="5.352" className={circlesTransition} />



<circle id="circle3" fill="#FFFFFF" stroke="#2E3192"  cx="29.201" cy="48.597" r="5.352" className={circlesTransition} />

<circle id="circle4" fill="#FFFFFF" stroke="#2E3192" cx="54.879" cy="58.89" r="11.183" className={circlesTransition}   />

</svg>




</div>)};