import Image from "next/image";
import Layout from "@/components/layout";
import Head from "next/head";

import "@/styles/homePageBG.css";


export default function Home() {




  return (<Layout>
<div className="text-white p-5 text-3xl">


    <p className="text-6xl mb-5  font-[robotoBOLD]">Welcome to Agua Guacamaya</p>

<hr className="my-3"/>


    <p className="font-[robotoLIGHT]">Discover the pristine beauty of the Colombian Andes in every sip.

Aguaguacamaya is a family-run business dedicated to providing you with the purest, most refreshing bottled water sourced directly from the heart of the Andes Mountains.

Our water is naturally filtered through layers of volcanic rock, ensuring exceptional taste and quality. Ideal for shops and restaurants seeking a premium, sustainable beverage option.</p>



</div>




    </Layout>);}
