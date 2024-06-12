import { Link } from "react-router-dom";

export default function Cagong() {
  return (
    <div className="bg-customBeige min-h-screen p-4 text-gray-600 font-medium font-NanumSquareNeo ">
      <div className=" max-w-screen-xl mx-auto gap-4 grid grid-cols-2 sm:flex">
        <div className="col-span-1 row-span-1 md:row-span-4 p-4">
          <h3 className="text-lg font-bold">
            <Link to="/work/#contrib-list">
              <img src="" alt="" />
            </Link>
          </h3>

          <ul className="pagelist mt-4 ">
            <li className="current mb-2 underline">
              <Link to="/work/spotify/">Cagong</Link>
            </li>
            <li className="mb-2 underline">
              <Link to="/work/figma/">Wanderlends</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-3 sm:col-span-2 bg-white text-customBlack p-4">
          <h1
            id="my-work-with-spotify"
            className="text-3xl font-extrabold mb-4"
          >
            카공여지도 개발 일지
          </h1>
          <div className="mt-4 mb-4">
            <p className="text-gray-400 ">2024.03.28 - 2024.04.25</p>
          </div>
          <p>
            카공여지도는 있잖아요카공여지도는 있잖아요카공여지도는
            있잖아요카공여지도는 있잖아요카공여지도는 있잖아요카공여지도는
            있잖아요카공여지도는 있잖아요
          </p>
          <ul className="pagelist mt-4 flex gap-3 ">
            <li className="current mb-2 ">
              <Link to="/work/spotify/">배포 URL</Link>
            </li>
            <li className="mb-2 ">
              <Link to="/work/figma/">Github</Link>
            </li>
          </ul>
          <h2 id="the-spotify-brand" className="text-2xl font-extrabold mt-8">
            구현 의도
          </h2>
          <img
            src="/work/spotify/logo.png"
            alt="카공여지도 여정"
            className="my-4"
          />
          <p>안녕하세요 저는요</p>
        </div>
      </div>
    </div>
  );
}
