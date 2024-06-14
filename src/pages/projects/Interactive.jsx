import { Link } from "react-router-dom";
import InteractiveLogo from "@assets/04_flower.png";

import home_01 from "@assets/interactive/home_01.gif";
import troublebefore_01 from "@assets/interactive/troublebefore.gif";
import solved_01 from "@assets/interactive/solved.gif";

export default function Interactive() {
  return (
    <div className="bg-customBeige min-h-screen p-4 text-gray-600 font-[600] font-NanumSquareNeo">
      <div className="max-w-screen-xl mx-auto gap-4 grid grid-cols-2 sm:flex">
        <div className="col-span-1 row-span-1 md:row-span-4 p-4">
          <h3 className="text-lg font-bold">
            <Link to="/">
              <img
                src={InteractiveLogo}
                alt="NextMovies Logo"
                className="w-20"
              />
              Interactive
            </Link>
          </h3>
        </div>

        <div className="col-span-5 md:col-span-3 sm:col-span-2 bg-white text-customBlack p-10">
          <h1 className="text-[2.2rem] font-extrabold mb-4">
            인터랙티브 포트폴리오
          </h1>
          <div className="mt-4 mb-4">
            <p className="text-gray-500 text-[1.2rem]">
              2024.05.28 - 2024.06.14
            </p>
          </div>
          <div className="p-10">
            <img
              src={InteractiveLogo}
              className="w-1/2"
              alt="NextMovies Logo"
            />
          </div>

          <p className="text-[1.4rem] text-gray-700 leading-[2.6rem]">
            현 포트폴리오 웹사이트입니다. motion-framer, gsap, lenis 등의
            라이브러리를 사용하여 동적으로 구현하였습니다. 구체적인 개발 과정을
            정리했습니다.
          </p>

          <ul className="pagelist mt-4 text-[1.4rem] flex gap-3 font-extrabold underline font-MarkPro text-blue-600">
            <li className="current mb-2">
              <Link to="https://byolsfolio.netlify.app/" target="_blank">
                배포 URL
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="https://github.com/loeybho/Newportfolio"
                target="_blank"
              >
                Github
              </Link>
            </li>
          </ul>

          <div className="">
            <div>
              <h2 className="text-[1.8rem] font-extrabold mt-24 mb-10">
                기술 스택 ⚒️
              </h2>

              <div className="text-gray-700">
                <div className="mb-8">
                  <h3 className="mb-4 font-extrabold text-[1.4rem]">
                    프론트엔드
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white" />

                    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
                    <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
                    <img src="https://img.shields.io/badge/classnames-000000?style=for-the-badge&logo=classnames&logoColor=white" />
                    <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
                    <img src="https://img.shields.io/badge/Framer-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
                    <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" />
                    <img src="https://img.shields.io/badge/Lenis-ffc0cb?style=for-the-badge&logo=Lenis&logoColor=white" />

                    <img src="https://img.shields.io/badge/react--scroll-000000?style=for-the-badge&logo=reactscroll&logoColor=white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 font-extrabold text-[1.4rem]">
                    개발 및 활용 API
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
                    <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-4">
              <h2 className="text-[1.8rem] font-extrabold mt-24 mb-10">
                이런 기능을 구현했어요 👩‍💻
              </h2>

              <ul className="">
                <li className="text-[1.4rem] text-gray-700 mb-20 leading-[2.6rem]">
                  <h3 className="font-extrabold mb-4">메인 페이지</h3>
                  <div className=" pb-4 pt-4 mb-4">
                    <img
                      src={home_01}
                      alt="home_01"
                      className="w-full border-3 border-customBeige"
                    />
                  </div>

                  <ul className="ml-7 list-disc">
                    <li className="mb-3">
                      <p className="">
                        Lenis 라이브러리를 사용하여 부드러운 전체스크롤 구현,
                        디자인적 완성도에 기여
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="">
                        React Scroll 라이브러리를 사용해 프로젝트 카테고리로
                        바로 이동할 수 있게 하여 사용자 경험 개선
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="">
                        디자인 마우스 포인터 구현. useRef로 DOM 요소에 접근.
                        container 요소에서 마우스 이동 이벤트를 감지하고, 마우스
                        포인터의 위치에 따라 flair요소를 애니메이션으로 이동.
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="">
              <h2 className="text-[1.8rem] text-customRed font-extrabold mt-24 mb-10">
                이런 문제를 해결했어요 🚀{" "}
                <span className="text-gray-400">기여도 100%</span>
              </h2>

              <ul className="">
                <li className="text-[1.4rem] text-gray-700 mb-20 leading-[2.6rem]">
                  <h3 className="font-extrabold mb-4 ">
                    hover 시 배경 색상 에러
                  </h3>
                  <div className=" pb-4 pt-4 mb-4">
                    <img
                      src={troublebefore_01}
                      alt="문제 상황 gif"
                      className="w-full border-3 border-customBeige"
                    />
                  </div>

                  <ul className="ml-7 list-disc">
                    <li className="mb-3">
                      <p className="">
                        문제 상황 및 원인
                        <br />
                        프로젝트 데이터를 컴포넌트로 나열할 때, 각 프로젝트의
                        배경 색상이 Hover 시 반응적으로 변하도록 구현. 그러나
                        일부 색상에서는 예상대로 작동하지 않는 문제가
                        발생.Tailwind CSS는 빌드 과정에서 동적으로 생성된
                        클래스를 인식하지 못하는 것이 원인.
                      </p>
                    </li>
                    <li>
                      <div className=" pb-4 pt-4 mb-4">
                        <img
                          src={solved_01}
                          alt="문제 해결 gif"
                          className="w-full border-3 border-customBeige"
                        />
                      </div>
                      <p className="">
                        해결 방법
                        <br /> classnames 라이브러리를 사용하여 가능한 클래스를
                        미리 정의하고, 동적으로 생성되는 클래스 이름을 정적으로
                        정의된 클래스 이름으로 대체. 이로써 Tailwind CSS가
                        클래스를 올바르게 분석하고 CSS를 생성할 수 있게 됨
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-[1.8rem] font-extrabold mt-24 mb-10">
                블로그에 정리 했어요 🗂️
              </h2>

              <ul className="mt-4 text-[1.4rem] font-extrabold underline font-MarkPro text-blue-600">
                <li className="current mb-2">
                  <Link
                    to="https://donoteatpasta.tistory.com/202"
                    target="_blank"
                  >
                    부드러운 전체 스크롤 설치 Lenis
                  </Link>
                </li>
                <li className="current mb-2">
                  <Link
                    to="https://donoteatpasta.tistory.com/205"
                    target="_blank"
                  >
                    classnames 라이브러리를 사용하여 동적 class 추가하기
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-[1.8rem] font-extrabold mt-24 mb-10">
                느낀점 🤓
              </h2>
              <p className="text-[1.4rem] text-gray-700 mb-20 leading-[2.6rem] gap-4 inline-block">
                동적인 요소를 가미해 포트폴리오를 만드니, 스스로 즐거움을 많이
                느꼈다. 사실 이전에 만든 포트폴리오가 있었는데, 그것 보다 훨씬
                애정이 간다. 꾸준히 추가하고, 디벨롭 할 예정이다.
                <img src="/construction.gif" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
