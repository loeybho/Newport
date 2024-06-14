import { Link } from "react-router-dom";
import NextMoviesLogo from "@assets/03_next.png";
import { useEffect, useRef } from "react";

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
                    <img src="https://img.shields.io/badge/Movies API-000000?style=for-the-badge&logo=&logoColor=white" />
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
                      alt="map_01"
                      className="w-full border-3 border-customBeige"
                    />
                  </div>

                  <ul className="ml-7 list-disc">
                    <li className="mb-3">
                      <p className="">API 활용하여 data fetching</p>
                    </li>
                    <li className="mb-3">
                      <p className="">
                        유튜브 영상의 개별 key값을 map으로 꺼냈음
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="">
                        prefetch 를 넣어 미리 로드하여 시간 개선
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="text-[1.4rem] text-gray-700 mb-20 leading-[2.6rem]">
                  <h3 className="font-extrabold mb-4">홈</h3>
                  <div className="pb-4 pt-4 mb-4">
                    <img
                      alt="map_01"
                      className="w-full border-3 border-customBeige"
                    />
                  </div>

                  <ul className="ml-7 list-disc">
                    <li className="mb-3">
                      <p className="">Movies API 활용하여 data fetching</p>
                    </li>
                    <li className="mb-3">
                      <p className="">
                        유튜브 영상의 개별 key값을 map으로 꺼냈음
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="">
                        prefetch 를 넣어 미리 로드하여 시간 개선
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="text-[1.4rem] text-gray-700 mb-20 leading-[2.6rem]">
                  <h3 className="font-extrabold mb-4">홈</h3>
                  <div className="pb-4 pt-4 mb-4">
                    <img
                      alt="map_01"
                      className="w-full border-3 border-customBeige"
                    />
                  </div>

                  <ul className="ml-7 list-disc">
                    <li className="mb-3">
                      <p className="">API 활용하여 data fetching</p>
                    </li>
                    <li className="mb-3">
                      <p className="">
                        유튜브 영상의 개별 key값을 map으로 꺼냈음
                      </p>
                    </li>
                    <li className="mb-3">
                      <p className="">
                        prefetch 를 넣어 미리 로드하여 시간 개선
                      </p>
                    </li>
                  </ul>
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
