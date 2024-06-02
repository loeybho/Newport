import { useState } from "react";

export default function Cover() {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  // useGSAP(() => {
  //   const t1 = gsap.timeline();
  //   t1.from("#intro-slider", {
  //     yPercent: "-100",
  //     duration: 0.7,
  //   }).from(["#main-title-1", "#main-title-2", "#title-3"], {
  //     opacity: 0,
  //     y: "+=30",
  //     stagger: 0.5,
  //   });
  // });

  return (
    <div>
      <div
        id="intro-slider"
        className="h-screen flex flex-col justify-between p-10 bg-slate-900 text-white font-MarkPros tracking-[-0.1em] font-bold"
      >
        <div className="flex-grow flex justify-center items-center gap-10">
          <div className="t">
            <h1 className="text-8xl text-neutral-400" id="main-title-1">
              I am
            </h1>
            <h1 className="text-8xl" id="main-title-1">
              Frontend
            </h1>
            <h1 className="text-8xl tracking-[-0.06em]" id="main-title-2">
              Developer
            </h1>
          </div>
          <img
            src="/ohbyeol.jpg"
            className="w-1/5 rounded-full"
            alt="프로필 이미지"
          />
          <div>
            <h1 className="text-6xl font-NanumSquareNeo" id="title-3">
              오별
            </h1>
            <h1 className="text-6xl font-NanumSquareNeo" id="title-3">
              Skillset
            </h1>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            id="more-btn"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className="text-2xl tracking-[0em] py-2 px-8 m-2 rounded-full border-2 transition-colors duration-300 ease-in-out"
            style={{
              backgroundColor: hover ? "#DBF2BD" : "transparent",
              color: hover ? "#4A5568" : "#fff",
              border: "2px solid",
              borderColor: hover ? "transparent" : "white",
              width: "140px",
            }}
          >
            {hover ? "Start" : "Star"}
          </button>
        </div>
      </div>
    </div>
  );
}
