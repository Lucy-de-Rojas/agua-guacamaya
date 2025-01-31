import Image from "next/image";
import Layout from "@/components/layout";
import Head from "next/head";


import { responsiveStylesMainContainer } from "@/utils/responsiveStyles";
import HR from "@/components/hr";



export default function Home() {




  return (<Layout >


    <h1>Welcome to Agua Guacamaya</h1>

<HR />


    <p className="font-[robotoLIGHT]">Discover the pristine beauty of the Colombian Andes in every sip.

Aguaguacamaya is a family-run business dedicated to providing you with the purest, most refreshing bottled water sourced directly from the heart of the Andes Mountains.
<br />
<br />
Our water is naturally filtered through layers of volcanic rock, ensuring exceptional taste and quality. Ideal for shops and restaurants seeking a premium, sustainable beverage option.



</p>

<p className="my-5">call to action here</p>







    </Layout>);}
