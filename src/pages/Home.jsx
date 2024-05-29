import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const comp = useRef(null);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#welcome", {
        duration: 1,
      })
        .from("#intro-slider", {
          yPercent: "-100",
          duration: 1.3,
          delay: 0.3,
        })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-MarkPro z-10 w-full flex flex-col gap-10 tracking-tighter"
      >
        <h1 className="text-9xl" id="title-1">
          Software Engineer
        </h1>
        <h1 className="text-9xl" id="title-2">
          Designer
        </h1>
        <h1 className="text-9xl" id="title-3">
          Freelancer
        </h1>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center place-items-center">
        <h1
          id="welcome"
          className="text-9xl font-bold text-gray-100 font-MarkPro"
        >
          Welcome.
        </h1>
      </div>
    </div>
  );
};

export default App;
