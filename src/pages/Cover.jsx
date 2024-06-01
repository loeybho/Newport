import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cover = () => {
  const container = useRef();

  const { contextSafe } = useGSAP({ scope: container });

  const onEnter = contextSafe(({ currentTarget }) => {
    gsap.to(currentTarget, { rotation: "+=360" });
  });

  // useGSAP(() => {
  //   const t1 = gsap.timeline();
  //   t1.from("#intro-slider", {
  //     // yPercent: "-100",
  //     duration: 0.7,
  //   }).from(["#main-title-1", "#main-title-2", "#title-3"], {
  //     opacity: 0,
  //     y: "+=30",
  //     stagger: 0.5,
  //   });
  // });

  return (
    <div>
      <div ref={container}>
        <div
          id="intro-slider"
          className="-mt-6 h-screen p-10 bg-slate-900 text-white  top-0 left-0 font-MarkPro z-10 w-full flex flex-col tracking-tighter font-bold"
        >
          <div className="flex ">
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
          <button id="more-btn" onClick={onEnter} className="text-4xl">
            Start
          </button>
        </div>
        <div className="h-screen flex  justify-center place-items-center">
          <h1
            id="welcome"
            className="text-9xl font-bold text-gray-100 font-spaceGrotesk"
          >
            Welcome.
          </h1>
          <div id="circle1" className="w-5 h-5 bg-yellow">
            hi
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
