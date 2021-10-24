import React from "react";
import image from "../profile.jpg";


export default function Home() {
  return (
    <main>
      

        <div class="bg-coolGray-400 w-full min-h-screen">
          <div class=" max-w-6xl mx-auto px-4 py-6 ">
            <div class=" w-full flex flex-row ">
            <img class="rounded-full w-full md:w-1/3" src={image} alt="Profile"/>

              <section class="mt-14 ml-14">
              <h2 class="uppercase text-green-400 font-medium text-3xl">Specializations</h2>
                <div class="h-1 bg-green-400 w-48 my-4">
                </div>
                <ul class="text-green-400 list-disc list-inside">
                 
                  <li>Front End Development</li>
                  <li>Design Thinking & Problem Solving </li>
                  <li>Front-end interfaces which interact with backend APIs</li>
                </ul>
                <h2 class="uppercase text-green-400 font-large text-3xl mt-4">About Me</h2>
                <div class="h-1 bg-green-400 w-48 my-2">
                </div>
                <div class="text-green-400 list-disc list-inside mt-2">
                <h3 class="uppercase text-black font-small text-3xl">  </h3>
                 Currently a Frontend Developer located in Philadelphia. In 2020 I began my transition from the world of wine to the world of the web. With years of not only coding experience, but also direct sales expertise. I have honed my craft to deliver a product that not only excels a clients expectations but allows the flexibility to create an even better goal.
                </div>
                
                
              </section>
            </div>


          </div>
        </div>

     
    </main>
  );
}