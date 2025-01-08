
import Logo from "./logo";
import Menu from "./menu";
import { useState } from "react";

export default function TopBar () {

        const [menuOpen, setMenuOpen] = useState(false);



return (<div className="flex items-center justify-between  ">
<Logo menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />


<div className="w-full flex flex-col justify-center">
<h1 className="text-white">Agua Guacamya</h1>
<h2 className="text-white text-lg">Pure, Natural, Colombian</h2>

</div>


</div>)};