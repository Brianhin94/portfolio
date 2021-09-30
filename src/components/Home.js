import React from "react";
import image from "../portb.jpg";

export default function Home() {
  return (
    <main>
      <section className="relative flex bg-green-500 justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hello home.
        </h1>
        <div></div>
      </section>
    </main>
  );
}