"use client"
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>NextJS</li>
        <li>TypeScript</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>İnönü Mesleki ve Teknik Anadolu Lisesi | Web Geliştirme Bölümü</li>
      </ul>
    ),
  },
];

const About = () => {

    const [tab,setTab] = useState("skills")

    const [isPending, startTransition] = useTransition();

    const handleChange = (id:any)=>{
        startTransition(()=>{
            setTab(id)
        })
    }

  return (
    <div className="text-white" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4">
        <Image alt="" src={"/2.jpg"} width={500} height={500} className="rounded-xl"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <p className="text-base lg:text-lg">
                I am Front-End Developer <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus deleniti voluptatum qui eius eligendi minima sapiente repellendus omnis aspernatur debitis officiis iusto quibusdam nemo culpa excepturi earum sit, cupiditate sed veritatis similique magnam assumenda. Nemo soluta asperiores veniam maiores, quam sunt! Quod animi, dolorum praesentium quisquam obcaecati nobis ullam eum!
            </p>

            <div className="flex flex-row justify-start mt-8">
                <TabButton 
                 selectTab={()=>handleChange("skills")}
                 active={tab === "skills"}>
                 Skills
                </TabButton>

                <TabButton 
                 selectTab={()=>handleChange("education")}
                 active={tab === "education"}>
                 Education
                </TabButton>

            </div>

            <div className="mt-8">
                {TAB_DATA.find((t)=>t.id === tab)?.content}
            </div>

        </div>
      </div>
    </div>
  );
};

export default About;
