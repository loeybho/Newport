import { Link } from "react-router-dom";
import { aspectRatio } from "@tailwindcss/aspect-ratio";

export default function Projects() {
  return (
    <>
      <div className="bg-customBlack h-screen p-4">
        <h1 className="text-4xl text-white font-MarkPros font-bold p-14 pt-4 sm:pt-24 mb-28 sm:text-6xl">
          Projects
        </h1>
        <Link to="/projects/cagong" className="">
          <div className="flex-none font-NanumSquareNeo sm:flex group">
            <div className="aspect-square w-full bg-red-100">
              <img src="이미지 주소" alt="프로젝트 이미지" className="w-full" />
            </div>
            <div className="w-full border-b border-slate-50 transition duration-300 ease-in-out p-10 text-white hover:text-customBlack hover:bg-customOrange">
              <h2 className=" text-[2.4rem] font-extrabold font-semibold mb-4">
                카공여지도
              </h2>
              <p className=" mb-5 text-[1.1rem]">
                공부하기 좋은 카페를 추천해주는 반응형 웹입니다. 멋쟁이사자처럼
                프론트엔드 스쿨 수업에서 팀을 구성해 기획, 디자인, 프론트엔드
                개발까지 완성했습니다.
              </p>
              <div className="mb-4">
                <ul className="flex gap-4">
                  <li className="border py-1 px-5 rounded-full group-hover:border-customBlack ">
                    React
                  </li>
                  <li className="border py-1 px-5 rounded-full group-hover:border-customBlack">
                    Styled-Component
                  </li>
                  <li className="border py-1 px-5 rounded-full group-hover:border-customBlack">
                    React
                  </li>
                </ul>
              </div>
              <div className="h-20 flex items-end">
                <button className="">클릭하여 자세히 보기 {">"}</button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
