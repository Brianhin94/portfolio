import React from "react";
import image from "../profile.jpg";


export default function Home() {
  return (
    <main>
      

        <div class="bg-green-400 w-full min-h-screen">
          <div class=" max-w-6xl mx-auto px-4 py-6 ">
            <div class=" w-full flex flex-row ">
            <img class="rounded-full w-full md:w-1/3" src={image} alt="Profile"/>

              <section class="mt-14 ml-14">
              <h2 class="uppercase text-black font-medium text-3xl">Specializations</h2>
                <div class="h-1 bg-green w-48 my-4">
                </div>
                <ul class="text-black list-disc list-inside">
                 
                  <li>Front End Development</li>
                  <li>Design Thinking & Problem Solving </li>
                  <li>Front-end interfaces which interact with backend APIs</li>
                </ul>
                <h2 class="uppercase text-black font-medium text-3xl">Specializations</h2>
                <div class="h-1 bg-green w-48 my-4">
                </div>
                <div class="text-black list-disc list-inside">
                 
                  I am a motivated and aspiring web developer with branding and trends knowledge. My goal is to learn more knowledge of the software industry and use my conversation skills to help Clients by exceeding their expectations.</div>
                
                <h3 class="uppercase text-black font-small text-3xl">  </h3>
              </section>
            </div>


          </div>
        </div>

     
    </main>
  );
}