import Link from "next/link";
import { closeMenu } from "@/utils/closeMenu";




export default function Menu ({menuOpen, setMenuOpen}) {



        function handleCancel () {
                closeMenu(menuOpen,setMenuOpen);
        }








        let styleLink = "bg-orange-400 py-5 text-3xl font-extrabold my-5 rounded-full w-3/4";

return (<div className="absolute bg-white left-[-110%] w-[90%] top-[130px] bottom-0 my-5 rounded-xl shadow-2xl flex flex-col justify-center items-center transition-all duration-700  ease-linear z-10" id="menu">


<button className="p-5 text-3xl bg-red-500 rounded-full text-white shadow-2xl " onClick={handleCancel}>X</button>

<Link href="/" className={styleLink} >Home</Link>
<Link href="/pages/about" className={styleLink} >About</Link>
<Link href="/pages/our-products" className={styleLink} >Our Products</Link>
<Link href="/pages/contact" className={styleLink} >Contact</Link>



</div>)};