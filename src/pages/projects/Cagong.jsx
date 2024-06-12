import { Link } from "react-router-dom";

export default function Cagong() {
  return (
    <div className="bg-customBeige min-h-screen p-4 text-gray-600 font-bold font-NanumSquareNeo ">
      <div className=" max-w-screen-xl mx-auto gap-4 grid grid-cols-2 sm:flex">
        <div className="col-span-1 row-span-1 md:row-span-4 p-4">
          <h3 className="text-lg font-bold">
            <Link to="/work/#contrib-list">
              <img src="" alt="" />
              Other Projects
            </Link>
          </h3>

          <ul className="pagelist mt-4 ">
            <li className="current mb-2 underline">
              <Link to="/work/spotify/">개발일지</Link>
            </li>
            <li className="mb-2 underline">
              <Link to="/work/figma/">구현의도</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-3 sm:col-span-2 bg-white text-customBlack p-4">
          <h1 className="text-[2rem] font-extrabold mb-4">
            카공여지도 개발 일지
          </h1>
          <div className="mt-4 mb-4">
            <p className="text-gray-500 ">2024.03.28 - 2024.04.25</p>
          </div>
          <p className="text-[1.2rem] text-gray-800 leading-8">
            카공여지도는 있잖아요카공여지도는 있잖아요카공여지도는
            있잖아요카공여지도는 있잖아요카공여지도는 있잖아요카공여지도는
            있잖아요카공여지도는 있잖아요
          </p>
          <ul className="pagelist mt-4 flex gap-3 text-blue-600">
            <li className="current mb-2 ">
              <Link to="">배포 URL</Link>
            </li>
            <li className="mb-2 ">
              <Link to="">Github</Link>
            </li>
          </ul>
          <h2 className="text-[1.6rem] font-extrabold mt-8">구현 의도</h2>
          <img
            src="/work/spotify/logo.png"
            alt="카공여지도 여정"
            className="my-4"
          />
          <p className="text-[1.2rem] text-gray-800  leading-8">
            안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요
            저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요
            안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요
            저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요
            안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요
            저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요
            안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요
            저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요
            안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요
            저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요
            안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요
            저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요
            안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요
            저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요
            안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요
            저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요
            안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요
            저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요
            안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요
            저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요
            안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요
            저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요
            안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요
            저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요
            안녕하세요 저는요 안녕하세요 저는요 안녕하세요 저는요 안녕하세요
            저는요 안녕하세요 저는요 안녕하세요 저는요
          </p>
        </div>
      </div>
    </div>
  );
}
