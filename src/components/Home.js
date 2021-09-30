import React from "react";
import image from "../profile.jpg";

export default function Home() {
  return (
    <main>
      <section class="object-right">

        <div class="bg-green-600 w-full min-h-screen">
          <div class=" max-w-6xl mx-auto px-4 py-6 flex justify-between md:flex-no-wrap flex-wrap">
            <div class="md:w-1/3 w-full ">
              <img src={image} alt="Profile" class=" mx-auto "></img>




              <section class="mt-14">
                <div class="h-1 bg-green w-48 my-4">
                </div>
                <p class="text-black">I am a motivated and aspiring web developer with branding and trends knowledge. My goal is to learn more knowledge of the software industry and use my conversation skills to help Clients by exceeding their expectations.</p>
              </section>

              <section class="mt-  justify-end mx-auto ">
                <h3 class="uppercase text-black font-medium text-3xl">Specializations</h3>
                <div class="h-1 bg-green w-48 my-4">
                </div>
                <ul class="text-black list-disc list-inside">
                 
                  <li>Front End Development</li>
                  <li>Design Thinking & Problem Solving </li>
                  <li>front-end interfaces which interact with backend APIs</li>
                </ul>
              </section>
            </div>


          </div>
        </div>

      </section>
    </main>
  );
}