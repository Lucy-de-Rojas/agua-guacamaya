import Link from "next/link"



export default function BottomNav () {

        let styleLinks = "bg-red-200 w-1/4 pb-5 pt-5 rounded-tl-lg rounded-tr-lg shadow-2xl text-[100%] text-[var(--dark-blue)] font-[robotoBOLD]";

return (<div className="fixed bottom-0 flex w-full  pt-5 justify-around landscape:bg-red-800 landscape:hidden">



<Link href="/"className={styleLinks} >Home</Link>
<Link href="/pages/our-products" className={styleLinks}>Products</Link>
<Link href="/pages/contact"className={styleLinks} >Contact</Link>

</div>)};