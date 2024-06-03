import Button from "@components/Button";
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
        className="h-screen flex flex-col justify-between bg-slate-900 text-white font-MarkPros tracking-[-0.1em] font-bold"
      >
        <div
          id="center"
          className="flex h-screen justify-center items-center p-10 "
        >
          <div className=" flex gap-20 justify-center items-end">
            <div className=" pb-10">
              <h1 className="text-8xl text-neutral-400" id="main-title-1">
                I am a
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
              className="w-60 rounded-full"
              alt="프로필 이미지"
            />
            <div className="w-70 flex flex-col gap-4 pb-10">
              <h1
                className="text-6xl font-NanumSquareNeo font-extrabold text-customGreen"
                id="title-3"
              >
                오별
              </h1>
              <Button>안녕</Button>
            </div>
          </div>
        </div>

        <div className=" flex text-2xl justify-end font-light tracking-normal">
          <button className="px-16 flex flex-grow ">
            <img
              src="/slash-arrow.svg"
              style={{ transform: "rotate(90deg)" }}
            />
            Contact
          </button>
          <div className="px-16 flex gap-10">
            <button className="flex">
              Github <img src="/slash-arrow.svg" />
            </button>
            <button className="flex gap--2">
              Blog <img src="/slash-arrow.svg" />
            </button>
          </div>
        </div>
        <div className="flex justify-center mb-9">
          <button
            id="more-btn"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className="text-2xl tracking-[0em] py-2 px-8 m-2 rounded-full border-2 transition-colors duration-300 ease-in-out bg-yellow-300"
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
