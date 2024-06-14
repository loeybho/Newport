import { Link } from "react-router-dom";
import WanderlengsLogo from "@assets/02_wanderlens.png";
import map_01 from "@assets/wanderlens/map_01.png";
import res_01 from "@assets/wanderlens/responsive_01.gif";
import ham_01 from "@assets/wanderlens/ham_01.png";
import ham_02 from "@assets/wanderlens/ham_02.gif";
import { useEffect, useRef } from "react";

export default function WanderLens() {
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
                src={WanderlengsLogo}
                alt="NextMovies Logo"
                className="w-20"
              />
              Wander lens
            </Link>
          </h3>
        </div>

        <div className="col-span-5 md:col-span-3 sm:col-span-2 bg-white text-customBlack p-10">
          <h1 className="text-[2.2rem] font-extrabold mb-4">원더 렌즈</h1>
          <div className="mt-4 mb-4">
            <p className="text-gray-500 text-[1.2rem]">
              2024.05.06 - 2024.05.11
            </p>
          </div>
          <div className="p-10">
            <img
              src={WanderlengsLogo}
              className="w-1/2"
              alt="NextMovies Logo"
            />
          </div>

          <p className="text-[1.4rem] text-gray-700 leading-[2.6rem]">
            방문했던 여행지의 사진을 모은 웹사이트입니다. Tailwind CSS로 심플한
            UI를 구현한 개인 프로젝트입니다. 구글 지도 API를 활용하여 갔던
            여행지에 마커를 띄우고, 여행지 페이지에 반응형 디자인을 고려하여
            사진을 배치했습니다.
          </p>
          <ul className="pagelist mt-4 text-[1.4rem] flex gap-3 font-extrabold underline font-MarkPro text-blue-600">
            <li className="current mb-2">
              <Link to="https://throughwanderlens.netlify.app/" target="_blank">
                배포 URL
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="https://github.com/loeybho/WanderLens?tab=readme-ov-file"
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
                    <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
                    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
                    <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-4 font-extrabold text-[1.4rem]">
                    개발 및 활용 API
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
                    <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white" />
                    <img src="https://img.shields.io/badge/Google Maps API-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white" />
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
                      src={map_01}
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
                <li className="text-[1.4rem] text-gray-700 mb-20 leading-[2.6rem]">
                  <h3 className="font-extrabold mb-4">반응형 디자인</h3>
                  <div className="pb-4 pt-4 mb-4">
                    <img
                      src={res_01}
                      alt="반응형 디자인"
                      className="w-full border-3 border-customBeige"
                    />
                  </div>

                  <ul className="ml-7 list-disc">
                    <li className="mb-3">
                      <p className="">
                        CSS에서 grid를 사용하여 화면 크기에 다라 콘텐츠의 배치를
                        다르게 적용, 일관된 사용자 경험 제공
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="">
                        모바일 환경에서 사용자가 페이지를 편하게 이동하기 위해,
                        긴 카테고리의 display를 none으로 지정 후, 햄버거 메뉴바
                        렌더링
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="text-[1.4rem] text-gray-700 mb-20 leading-[2.6rem]">
                  <h3 className="font-extrabold mb-4">모달창(모바일 환경)</h3>
                  <div className="grid grid-cols-2 gap-10 pb-4 pt-4 mb-4">
                    <img
                      src={ham_01}
                      alt="home_01"
                      className="w-full border-3 border-customBeige"
                    />
                    <img
                      src={ham_02}
                      alt="home_02"
                      className="w-full border-3 border-customBeige"
                    />
                  </div>

                  <ul className="ml-7 list-disc">
                    <li className="mb-3">
                      <p className="">
                        햄버거 메뉴바 클릭 시 useState를 이용하여 카테고리
                        모달창 렌더링. 모달 UI는 클릭 이벤트 여부에 따라
                        동적으로 렌더링
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
                    to="https://donoteatpasta.tistory.com/197"
                    target="_blank"
                  >
                    리액트에서 Google Maps API 사용하는 방법
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-[1.8rem] font-extrabold mt-24 mb-10">
                느낀점 🤓
              </h2>

              <p className="text-[1.4rem] text-gray-700 mb-20 leading-[2.6rem]">
                구글 지도 API를 활용하여 프로젝트를 구현할 수 있을까 걱정이
                되었는데, 공식 문서가 꼼꼼히 적혀 있어 어렵지 않게 구현할 수
                있었다. 또한 Tailwind CSS를 처음으로 이용했는데 왜 편하다고 하는
                지 알게 되었다. 추후 사진 용량 줄이기, 구글 지도 Marker 함수
                최신 버전으로 수정, 추가 여행지 카테고리 및 사진을 추가하는
                리팩토링 시간을 가질 예정이다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
