import { Link } from "react-router-dom";
import NextMoviesLogo from "@assets/04_flower.png";
import { useEffect, useRef } from "react";

export default function Interactive() {
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  return (
    <div
      ref={topRef}
      className="bg-customBeige min-h-screen p-4 text-gray-600 font-[600] font-NanumSquareNeo"
    >
      <div className="max-w-screen-xl mx-auto gap-4 grid grid-cols-2 sm:flex">
        <div className="col-span-1 row-span-1 md:row-span-4 p-4">
          <h3 className="text-lg font-bold">
            <Link to="/">
              <img
                src={NextMoviesLogo}
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
            <img src={NextMoviesLogo} className="w-1/2" alt="NextMovies Logo" />
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
                  <h3 className="font-extrabold mb-4">구글 지도</h3>
                  <div className="pb-4 pt-4 mb-4">
                    <img
                      alt="map_01"
                      className="w-full border-3 border-customBeige"
                    />
                  </div>

                  <ul className="ml-7 list-disc">
                    <li className="mb-3">
                      <p className="">
                        구글 Map API에서 키 값을 발급받아 Script에 넣고, 구글
                        지도 연동하여 렌더링. 공식 문서에는 javascript를
                        기반으로 나와있어 React 문법에 맞게 수정
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="">
                        useRef로 구글 지도를 띄우기 위한 mapRef 지정 후 구글
                        지도가 렌더링 될 참조 DOM요소 선택
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="">
                        갔던 여행지를 지도에 체크하기 위해 각 나라의 위도와
                        경도가 담긴 좌표값 계산. 커스텀 마커로 등록
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
                기존 포트폴리오가 정적인 느낌이 강해 아쉬움이 있었다. 다시
                개발하길 잘 했다는 생각이 들었고, 애정이 훨씬 간다. 꾸준히
                추가하고, 디벨롭 할 예정이다.
                <img src="/construction.gif" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
