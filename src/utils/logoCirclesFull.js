

export function logoCirclesFULL (menuOpen, setMenuOpen) {

        let circle1 = document.getElementById("circle1");
        let circle2 = document.getElementById("circle2");
        let circle3 = document.getElementById("circle3");
        let circle4 = document.getElementById("circle4");

        let menu = document.getElementById("menu");




        if(!menuOpen) {
                setMenuOpen(!menuOpen);


                circle1.style.r = "5";
                circle1.style.cy="13";
                circle1.style.cx = "31";


                menu.style.left = "3%";




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



                menu.style.left = "-110%";





        }










}