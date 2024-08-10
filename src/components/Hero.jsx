import React, { useState, useEffect } from "react";
import DotPattern from "@/components/magicui/dot-pattern";
import useMousePosition from "../assets/hooks/useMousePosition";
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
    
    // Run the smoothing function in an animation frame for smooth updates
    const animationFrame = requestAnimationFrame(handleSmooth);
    
    // Clean up the animation frame on component unmount
    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX, mouseY]);
  
  return (
    <div className="flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
        <FadeText
          className="font-bold text-black dark:text-white text-8xl pb-5"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.2 } },
            transition: { delay: 0.2 },

          }}
          text="Kajus Černiauskas"
        />
        <FadeText
          className="text-4xl font-bold text-black dark:text-white flex "
          direction="right"
          framerProps={{
            show: { transition: { delay: 0.4 } },
            transition: { delay: 0.2 },
          }}
          text="Software Developer"
        />
        <FadeText
          className="text-4xl font-bold text-black dark:text-white flex justify-end"
          direction="down"
          framerProps={{
            show: { transition: { delay: 0.6 } },
            transition: { delay: 0.2 },
          }}
          text="Student at KTU"
        />
      </p>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
        x={smoothX}
        y={smoothY}
      />
    </div>
  );
}
