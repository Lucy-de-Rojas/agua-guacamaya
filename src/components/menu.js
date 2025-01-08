import Link from "next/link";
import { closeMenu } from "@/utils/closeMenu";




export default function Menu ({menuOpen, setMenuOpen}) {



        function handleCancel () {
                closeMenu(menuOpen,setMenuOpen);
        }








        let styleLink = "bg-orange-400 py-5 text-3xl font-extrabold my-5 rounded-full w-3/4";

return (<div className="absolute bg-white left-[-110%] w-[90%] top-[130px] bottom-0 mx-5 my-5 rounded-xl shadow-2xl flex flex-col justify-center items-center transition-all duration-700  ease-linear" id="menu">

<button className="p-5 text-3xl bg-red-500 rounded-full text-white shadow-2xl " onClick={handleCancel}>X</button>

<Link href="/" className={styleLink} >Home</Link>
<Link href="/" className={styleLink} >About</Link>
<Link href="/" className={styleLink} >Our Products</Link>
<Link href="/" className={styleLink} >Contact</Link>



</div>)};