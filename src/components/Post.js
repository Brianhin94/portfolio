import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content/Content';

export default function Stack() {
  return (
    <div

      className="bg-coolGray-400 text-green-400 min-h-screen flex flex-col items-center font-dosis"
      id="stack"
    >
      
      <div className="my-2 flex flex-wrap justify-center mt-10">
        {content.stack.tech.map((tech, index) => {
          return (
            <span
              className={`${
                index % 2 === 0 ? ' animate-float' : ' animate-refloat'
              } w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 `}
            >
              <LazyLoadImage src={tech.img} alt={tech.alt} />
            </span>
          );
        })}
      </div>
      <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">
        {content.stack.desc}
      </p>
    </div>
  );
}