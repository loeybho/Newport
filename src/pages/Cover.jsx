import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cover = () => {
  const comp = useRef(null);
  const container = useRef();

  const { contextSafe } = useGSAP({ scope: container });

  const onEnter = contextSafe(({ currentTarget }) => {
    gsap.to(currentTarget, { rotation: "+=360" });
  });

  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.from("#intro-slider", {
      // yPercent: "-100",
      duration: 0.7,
    }).from(["#main-title-1", "#main-title-2", "#title-3"], {
      // opacity: 0,
      // y: "+=30",
      // stagger: 0.5,
    });

    gsap.set("#flair", { xPercent: -50, yPercent: -50 });

    let xTo = gsap.quickTo("#flair", "x", { duration: 0.6, ease: "power3" }),
      yTo = gsap.quickTo("#flair", "y", { duration: 0.6, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  });

  return (
    <div ref={comp}>
      <div id="flair" className="w-1/6 h-24 bg-black"></div>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-white-100 top-0 left-0 font-MarkPro z-10 w-full flex flex-col tracking-tighter text-customRed font-bold"
      >
        <div className="flex">
          <div>
            <h1 className="text-8xl" id="main-title-1">
              Frontend
            </h1>
            <h1 className="text-8xl" id="main-title-2">
              Developer
            </h1>
          </div>

          <img src="/ohbyeol.jpg" className="w-1/4" alt="프로필 이미지" />
        </div>

        <h1 className="text-4xl font-NanumSquareNeo" id="title-3">
          오별
        </h1>
        <div ref={container}>
          <button id="more-btn" onClick={onEnter} className="text-4xl">
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
