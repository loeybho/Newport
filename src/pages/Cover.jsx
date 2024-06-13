import Button from "@components/Button";
import AboutMe from "@pages/AboutMe";
import Projects from "@pages/Projects";
import Skillset from "@pages/Skillset";
import ToyProjects from "@pages/ToyProjects";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function Cover() {
  const [hover, setHover] = useState(false);

  const handleHover = () => setHover(!hover);

  return (
    <>
      <div
        id="intro-slider"
        className="h-screen flex flex-col justify-center bg-slate-900 text-white font-MarkPros tracking-[0em] font-extrabold"
      >
        <div id="center" className=" flex justify-center px-1">
          <div className="leading-none flex flex-col sm:flex-row gap-10 sm:gap-20 justify-center items-center sm:items-end">
            <div className="pt-16 sm:pb-10 ">
              <div className=" flex justify-end">
                <Button />
              </div>

              <h1
                className="text-[5rem] sm:text-[6rem] text-neutral-400"
                id="main-title-1"
              >
                I am a
              </h1>

              <h1 id="main-title-1" className="text-[5rem] sm:text-[6rem]">
                Frontend
              </h1>
              <h1
                className="tracking-[-0.06em] text-[5rem] sm:text-[6rem]"
                id="main-title-2"
              >
                Developer
              </h1>
            </div>

            <div className="w-60 sm:w-70 flex flex-col gap-5 items-center">
              <img
                src="/ohbyeol.jpg"
                className="w-48 sm:w-60 rounded-full"
                alt="프로필 이미지"
              />
              <h1
                className="text-[3rem] text-center sm:text-[4rem] font-NanumSquareNeo font-extrabold text-customGreen "
                id="title-3"
              >
                오 별
              </h1>
            </div>
          </div>
        </div>

        <div className="pt-28">
          <div className="pb-4 flex tracking-normal text-[1.3rem] sm:text-[1.7rem] sm:flex-row">
            <div className="font-NanumSquareNeo font-normal flex flex-grow px-6 hover:underline sm:px-14 sm:py-0">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                <button className="flex hover:underline">
                  <img
                    className="w-6 sm:w-8 pt-[4px]"
                    src="/slash-arrow.svg"
                    style={{ transform: "rotate(45deg)" }}
                  />
                  프로젝트 바로 보기
                </button>
              </Link>
            </div>

            <div className=" font-normal px-8 sm:px-16 flex gap-5 pb-20 sm:gap-10 sm:pb-10">
              <RouterLink to="https://github.com/loeybho" target="_blank">
                <button className="flex hover:underline">
                  Github{" "}
                  <img src="/slash-arrow.svg" className="w-6 sm:w-8 pt-[5px]" />
                </button>
              </RouterLink>
              <RouterLink
                to="https://donoteatpasta.tistory.com/"
                target="_blank"
              >
                <button className="flex hover:underline">
                  Blog{" "}
                  <img src="/slash-arrow.svg" className="w-6 sm:w-8 pt-[5px]" />
                </button>
              </RouterLink>
            </div>
          </div>
          <div className="mb-9">
            <div>
              <div className="flex justify-center">
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
                    className="text-[1.5rem] tracking-wider m-2 flex items-center text-customStrongGreen underline"
                  >
                    <div className="w-24">{hover ? "START" : "STAR"}</div>
                    <img
                      src="/arrow.svg"
                      className={`w-8 transform transition-transform ${hover ? "rotate-0" : "-rotate-180"}`}
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="aboutme">
        <AboutMe />
      </div>

      <Skillset />
      <div id="projects">
        <Projects />
      </div>
      <ToyProjects />
    </>
  );
}
