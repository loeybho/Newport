import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Button() {
  const buttonRef = useRef(null);
  const [textIndex, setTextIndex] = useState(0);
  const techStacks = [
    "CSS",
    "HTML",
    "JavaScript",
    "React",
    "NextJS",
    "TypeScript",
  ];

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % techStacks.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    gsap.to(buttonRef.current, {
      opacity: 1,
      duration: 0.2,
      ease: "power1.inOut",
    }); // Quickly fade in when data changes
    const timeout = setTimeout(() => {
      gsap.to(buttonRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power1.inOut",
      }); // Fade out after 1 second
    }, 1000);

    // Cleanup timeout on component unmount or when textIndex changes
    return () => clearTimeout(timeout);
  }, [textIndex]);

  return (
    <div>
      <p
        ref={buttonRef}
        className="border-[2px] text-1xl p-2 border-customGreen font-normal tracking-wider text-customGreen inline-block w-36 text-center"
      >
        {techStacks[textIndex]}
      </p>
    </div>
  );
}
