import React, { useState, useEffect } from "react";
import DotPattern from "@/components/magicui/dot-pattern";
import useMousePosition from "../assets/hooks/useMousePosition";
import myPicture from "/pfp.png";
import { FadeText } from "@/components/magicui/fade-text";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { mouseX, mouseY } = useMousePosition();

  const [smoothX, setSmoothX] = useState(0);
  const [smoothY, setSmoothY] = useState(0);

  useEffect(() => {
    const easing = 0.6;

    const handleSmooth = () => {
      setSmoothX((prevX) => prevX + (mouseX - prevX) * easing);
      setSmoothY((prevY) => prevY + (mouseY - prevY) * easing);
    };

    const animationFrame = requestAnimationFrame(handleSmooth);

    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX, mouseY]);

  return (
    <>

    <div className="flex w-full flex-col items-center justify-center overflow-hidden rounded-lg h-[500px] md:h-[70rem]">
      <div className="z-10 space-y-1 md:space-y-5 whitespace-pre-wrap text-center text-5xl font-medium tracking-normal md:tracking-tighter text-black dark:text-white">
        <img
          src={myPicture}
          alt="Kajus Černiauskas"
          className="rounded-full w-40 h-40 md:size-80 border-4 border-stone-300 mb-10"
        />
        <FadeText
          className="font-bold text-white dark:text-white text-3xl md:text-8xl pb-5"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.2 } },
            transition: { delay: 0.2 },
          }}
          text="Kajus Černiauskas"
        />
        <FadeText
          className="text-xl md:text-4xl font-bold text-white dark:text-white flex "
          direction="right"
          framerProps={{
            show: { transition: { delay: 0.4 } },
            transition: { delay: 0.2 },
          }}
          text="Software Developer"
        />
        <FadeText
          className="text-xl md:text-4xl font-bold text-white dark:text-white flex justify-end"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.6 } },
            transition: { delay: 0.2 },
          }}
          text="Student at KTU"
        />
      </div>
    </div>
    </>
  );
}
