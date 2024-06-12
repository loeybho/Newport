import { Link } from "react-router-dom";
import cagong from "@assets/01_cagong.png";

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
          <Link to={project.link} key={project.id} className="">
            <div className="font-NanumSquareNeo grid grid-cols-1 sm:grid-cols-[1fr_2fr] group mb-8">
              <div className="bg-customBeige">
                <img
                  src={project.imageSrc}
                  alt={project.altText}
                  className="w-full"
                />
              </div>
              <div className="border-b border-slate-50 transition duration-300 ease-in-out p-10 text-white hover:text-customBlack hover:bg-customOrange">
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
