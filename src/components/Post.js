import { useCallback, useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "../portb.jpg";



export default function Post() {
    return   <main>
    <img
      src={image}
      alt="Background"
      className="absolute object-cover w-full h-full"
    />
    <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
      <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
        skills.
      </h1>
    </section>
  </main>

}