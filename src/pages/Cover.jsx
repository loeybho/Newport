import Button from "@components/Button";
import AboutMe from "@pages/AboutMe";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Cover() {
  const [hover, setHover] = useState(false);

  const handleHover = () => setHover(!hover);

  return (
    <div>
      <div
        id="intro-slider"
        className="h-screen flex flex-col justify-between bg-slate-900 text-white font-MarkPros tracking-[-0.1em] font-bold"
      >
        <div
          id="center"
          className="flex h-screen justify-center items-center p-4 sm:p-10"
        >
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 justify-center items-center sm:items-end">
            <div className="pt-16 text-center sm:text-left sm:pb-10 ">
              <h1
                className="text-5xl sm:text-8xl text-neutral-400"
                id="main-title-1"
              >
                I am a
              </h1>
              <h1 className="text-5xl sm:text-8xl" id="main-title-1">
                Frontend
              </h1>
              <h1
                className="text-5xl sm:text-8xl tracking-[-0.06em]"
                id="main-title-2"
              >
                Developer
              </h1>
            </div>
            <img
              src="/ohbyeol.jpg"
              className="w-44 sm:w-60 rounded-full"
              alt="프로필 이미지"
            />
            <div className="w-60 sm:w-70 flex flex-col gap-4 pb-0 text-center sm:text-left sm:pb-12">
              <h1
                className="text-5xl sm:text-7xl font-NanumSquareNeo font-extrabold text-customGreen"
                id="title-3"
              >
                오 별
              </h1>
              <div>
                <Button>안녕</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-1xl justify-end font-light tracking-normal sm:text-2xl sm:flex-row">
          <div className="font-normal flex gap-1 flex-grow px-6 py-2 hover:underline sm:px-14 sm:py-0">
            <button className="flex hover:underline">
              <img
                className="w-6 sm:w-8"
                src="/slash-arrow.svg"
                style={{ transform: "rotate(45deg)" }}
              />
              프로젝트 바로 보기
            </button>
          </div>

          <div className="px-8 sm:px-16 flex gap-5 sm:gap-10">
            <button className="flex  hover:underline">
              Github <img src="/slash-arrow.svg" className="w-6 sm:w-8" />
            </button>
            <button className="flex gap-2  hover:underline">
              Blog <img src="/slash-arrow.svg" className="w-6 sm:w-8" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mb-9">
          <Link
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            duration={500}
          >
            <button
              id="more-btn"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className="text-2xl w-40 tracking-[0em] py-2 px-8 m-2 rounded-full transition-colors border-3 ease-in-out border-white hover:bg-customGreen hover:text-customBlack hover:border-customGreen"
            >
              {hover ? "Start" : "Star"}
            </button>
          </Link>
        </div>
      </div>

      <div id="aboutme">
        <AboutMe />
      </div>
    </div>
  );
}
