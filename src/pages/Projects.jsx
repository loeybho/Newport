import { Link } from "react-router-dom";
import cagong from "@assets/01_cagong.png";
import wanderlens from "@assets/02_wanderlens.png";
import next from "@assets/03_next.png";
import resume from "@assets/04_flower.png";
import classNames from "classnames";

const projects = [
  {
    id: 1,
    title: "카공여지도",
    description:
      "공부하기 좋은 카페를 추천해주는 반응형 웹입니다. 멋쟁이사자처럼 프론트엔드 스쿨 수업에서 팀을 구성해 기획, 디자인, 프론트엔드 개발까지 완성했습니다.",
    imageSrc: cagong,
    altText: "카공여지도 광고 이미지",
    techStack: ["React", "Recoil", "Axios", "Swiper", "Styled-Components"],
    link: "/projects/cagong",
    hoverColor: "hover:bg-customOrange",
  },
  {
    id: 2,
    title: "인터랙티브 포트폴리오",
    description:
      "현 포트폴리오 웹사이트 입니다. GSAP, framer-motion등의 라이브러리를 사용하여 보다 동적인 화면을 구현했습니다.",
    imageSrc: resume,
    altText: "카공여지도 광고 이미지",
    techStack: ["React", "GSAP", "Framer-Motion", "Lenis"],
    link: "/projects/interactive",
    hoverColor: "hover:bg-customLightYellow",
  },
  {
    id: 3,
    title: "Next Movies",
    description:
      "영화의 정보와 관련 유튜브 영상을 볼 수 있는 웹 앱입니다. 관련 유튜브 링크를 동적으로 받아와 감상할 수 있게 구현했습니다.",
    imageSrc: next,
    altText: "Next Movies 이미지",
    techStack: ["Next JS", "Typescript", "Tailwind CSS"],
    link: "/projects/nextmovies",
    hoverColor: "hover:bg-customBlue",
  },
  {
    id: 4,
    title: "WanderLens",
    description:
      "방문했던 여행지의 사진을 모은 웹사이트입니다. 구글 지도 API를 활용하여 지도를 띄우고, 반응형 디자인을 적용했습니다.",
    imageSrc: wanderlens,
    altText: "카공여지도 광고 이미지",
    techStack: ["React", "Tailwind CSS"],
    link: "/projects/wanderlens",
    hoverColor: "hover:bg-customLightGray",
  },
];

export default function Projects() {
  return (
    <>
      <div className="bg-customBlack p-4">
        <div className="pt-28 pl-16">
          <h1 className="text-[4rem] text-white font-MarkPros font-bold mt-4 sm:mt-24 mb-28 sm:text-[6rem]">
            Projects
          </h1>
        </div>
        {projects.map((project) => (
          <Link to={project.link} key={project.id} className="cursor-pointer">
            <div
              className={classNames(
                "transition",
                "duration-300",
                "ease-in-out",
                "font-NanumSquareNeo",
                "grid",
                "text-white",
                "hover:text-customBlack",
                "grid-cols-1",
                "sm:grid-cols-[1fr_2fr]",
                "group",
                "mb-8",
                project.hoverColor // Apply the dynamic hover color class
              )}
            >
              <div className="flex items-center">
                <img
                  src={project.imageSrc}
                  alt={project.altText}
                  className="w-full"
                />
              </div>
              <div className="border-b border-slate-50 p-10 ">
                <h2 className="text-[2.4rem] font-extrabold font-semibold mb-4">
                  {project.title}
                </h2>
                <p className="mb-5 text-[1.1rem]">{project.description}</p>
                <div className="mb-4">
                  <ul className="flex gap-4 flex-wrap">
                    {project.techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="border py-1 px-5 rounded-full group-hover:border-customBlack"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="h-20 flex items-end">
                  <button className="underline text-customStrongGreen">
                    클릭하여 자세히 보기 {">"}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
