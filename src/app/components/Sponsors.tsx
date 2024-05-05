"use client";

import Image from "next/image";
import dose from "@/app/resources/dose.png";
import kvatro from "@/app/resources/kvatro.webp";
import morino from "@/app/resources/Morino.webp";
import pekara from "@/app/resources/Pekarata_od_karshi.webp";
import Heading from "./Heading";
import { RevealList } from  'next-reveal'

export default function Sponsors() {
    return(
        <section className="my-10 md:mx-28 mx-12">
            <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
            <Heading heading={"Organizators for the coming event"}></Heading>
            </div>
            
            <div className="lg:flex justify-evenly items-center gap-14">
            <RevealList interval={100} delay={500}>
                <div className="text-eestec text-center items-center" >
                <Image src={dose} alt="Sponsor Logo" height={300} className="mt-8 mb-8"></Image>
                </div>
                
                <div className="text-eestec text-center items-center" >
                <Image src={kvatro} alt="Sponsor Logo" height={300} className="mt-8 mb-8"></Image>
                </div>

                <div className="text-eestec text-center items-center" >
                <Image src={morino} alt="Sponsor Logo" height={300} className="mt-8 mb-8"></Image>
                </div>

                <div className="text-eestec text-center items-center" >
                <Image src={pekara} alt="Sponsor Logo" height={300} className="mt-8 mb-8"></Image>
                </div>

            </RevealList>
            </div>

            
        </section>
    );
}