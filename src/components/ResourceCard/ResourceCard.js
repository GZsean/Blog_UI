"use client";
import { useState } from "react";

export default function ResourceCard({ src, alt }) {
  const defaultSrc = "/next.svg";

  const [imageSrc, setImageSrc] = useState(src);
  const onErrorHandler = () => {
    setImageSrc(defaultSrc);
  };
  return (
    <div className="bg-white shadow-xl hover:shadow-2xl">
      <img
        className="h-[160px] w-full bject-contain"
        src={imageSrc}
        alt={alt}
        onError={onErrorHandler}
      ></img>
      <div className="pt-4 px-4 text-base font-bold">
        Why I Created an Institutional Review Board at Pluralsight
      </div>
      <div className="pt-4 px-4 text-base font-normal font-serif">by sean</div>
      <div className="pt-4 px-4 text-[#3e5674]">2023/09/09</div>
      <div className="py-4 px-4 cursor-pointer text-cyan-700">view more</div>
    </div>
  );
}
