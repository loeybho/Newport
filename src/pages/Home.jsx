import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Cover from "@pages/Cover";

const App = () => {
  const container = useRef();
  const flair = useRef();

  useGSAP(() => {
    const handleMouseMove = (e) => {
      const containerRect = container.current.getBoundingClientRect();
      const mouseX = e.clientX - containerRect.left;
      const mouseY = e.clientY - containerRect.top;

      gsap.to(flair.current, {
        x: mouseX,
        y: mouseY,
        duration: 0.6,
        ease: "power3",
      });
    };

    container.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <nav className="flex justify-between z-40 fixed top-0 w-full">
        <button>버튼1</button>
        <button>버튼2</button>
      </nav>
      <div
        ref={flair}
        id="flair"
        className="rounded-full w-5 h-5 bg-customRed"
      ></div>
      <div ref={container}>
        <Cover />
      </div>
    </>
  );
};

export default App;
