import { useState } from "react";
import Link from "next/link";



import Logo from "./logo";
import Menu from "./menu";






export default function TopBar () {

        const [menuOpen, setMenuOpen] = useState(false);



return (<div className="flex items-center justify-between">
<Logo menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />

{/* tope header text: */}

<div className="w-full flex flex-col justify-center">
        <Link href="/">

{/* main title: */}
<p className="text-white font-[pacifico]">Agua Guacamya</p>


{/* tag line: */}
<h2 className="text-white text-lg">Pure, Natural, Colombian</h2>
        </Link>

</div>


</div>)};