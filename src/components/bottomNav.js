import Link from "next/link"



export default function BottomNav () {

        let styleLinks = "bg-red-200 w-1/4 pb-5 pt-5 rounded-tl-lg rounded-tr-lg shadow-2xl";

return (<div className="fixed bottom-0 flex w-full  pt-5 justify-around ">



<Link href="/"className={styleLinks} >Home</Link>
<Link href="/" className={styleLinks}>Products</Link>
<Link href="/"className={styleLinks} >Contact</Link>

</div>)};