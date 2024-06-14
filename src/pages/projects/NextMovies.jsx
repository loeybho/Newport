import { Link } from "react-router-dom";
import NextMoviesLogo from "@assets/03_next.png";
import { useEffect, useRef } from "react";
import home_01 from "@assets/nextmovie/home_01.png";
import detail_01 from "@assets/nextmovie/detail_01.png";

export default function NextMovies() {
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
              Next Movies
            </Link>
          </h3>
        </div>

        <div className="col-span-5 md:col-span-3 sm:col-span-2 bg-white text-customBlack p-10">
          <h1 className="text-[2.2rem] font-extrabold mb-4">넥스트 무비</h1>
          <div className="mt-4 mb-4">
            <p className="text-gray-500 text-[1.2rem]">
              2024.05.14- 2024.06.01
            </p>
          </div>
          <div className="p-10">
            <img src={NextMoviesLogo} className="w-1/2" alt="NextMovies Logo" />
          </div>

          <p className="text-[1.4rem] text-gray-700 leading-[2.6rem]">
            영화 포스터와 관련 유튜브 영상을 띄워주는 웹 어플리케이션입니다.
            노마드코더 수업을 들으며 진행한 개인 프로젝트로 노마드코더가
            제공해준 API를 이용하여 영화 데이터를 렌더링 했습니다.
          </p>
          <ul className="pagelist mt-4 text-[1.4rem] flex gap-3 font-extrabold underline font-MarkPro text-blue-600">
            <li className="current mb-2">
              <Link
                to="https://next-movies-three-beryl.vercel.app/"
                target="_blank"
              >
                배포 URL
              </Link>
            </li>
            <li className="mb-2">
              <Link to="https://github.com/loeybho/NextMovies" target="_blank">
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
                    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
                    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
                    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
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
                  <h3 className="font-extrabold mb-4">홈</h3>
                  <div className="pb-4 pt-4 mb-4">
                    <img
                      src={home_01}
                      alt="map_01"
                      className="w-full border-3 border-customBeige"
                    />
                  </div>

                  <ul className="ml-7 list-disc">
                    <li className="mb-3">
                      <p className="">
                        fetch 함수를 사용하여 Moive API로부터 데이터를 가져온
                        후, JSON형태로 변환하여 반환
                      </p>
                    </li>

                    <li className="mb-3">
                      <p className="">
                        각각의 포스터 요소를 Link로 감싸되, prefetch 속성을
                        추가하여 링크된 페이지를 미리 로드. 해당 포스터를
                        클릭하여 디테일 페이지 이동시 영화 정보를 로딩 없이 바로
                        렌더링 하여 사용자 경험 개선
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="text-[1.4rem] text-gray-700 mb-20 leading-[2.6rem]">
                  <h3 className="font-extrabold mb-4">영화 디테일</h3>
                  <div className="pb-4 pt-4 mb-4">
                    <img
                      src={detail_01}
                      alt="detail_01"
                      className="w-full border-3 border-customBeige"
                    />
                  </div>

                  <ul className="ml-7 list-disc">
                    <li className="mb-3">
                      <p className="">
                        video 배열을 순회하며 유튜브 비디오를 iframes요소로
                        렌더링. 페이지 내에서 관련 영상을 바로 볼 수 있게 구현
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="">
                        getMovie 함수를 사용하여 API로부터 데이터를 불러온 후,
                        영화 제목, 정보, 평점 등 렌더링
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
                    to="https://donoteatpasta.tistory.com/198"
                    target="_blank"
                  >
                    Next.js 입문하기
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="https://donoteatpasta.tistory.com/199"
                    target="_blank"
                  >
                    Nex.js data fetching 하는 방법
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="https://donoteatpasta.tistory.com/200"
                    target="_blank"
                  >
                    Nex.js 를 Vercel로 배포하기
                  </Link>
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <h2 className="text-[1.8rem] font-extrabold mt-24 mb-10">
                느낀점 🤓
              </h2>

              <p className="text-[1.4rem] text-gray-700 mb-20 leading-[2.6rem]">
                처음으로 Next js를 사용한 프로젝트라 완료된 후 뿌듯함이 있었다.
                추후 리팩토링 시간에 반응형 디자인을 적용하고, 공공 영화 API로
                수정해 더 풍부하고, 최신의 콘텐츠를 제공할 예정이다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
