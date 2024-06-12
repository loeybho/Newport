import { Link } from "react-router-dom";

export default function Cagong() {
  return (
    <div className="bg-customBeige min-h-screen p-4 text-gray-600 font-[600] font-NanumSquareNeo ">
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
        <div className="col-span-5 md:col-span-3 sm:col-span-2 bg-white text-customBlack p-10">
          <h1 className="text-[2rem] font-extrabold mb-4">
            카공여지도 개발 일지
          </h1>
          <div className="mt-4 mb-4">
            <p className="text-gray-500 text-[1.2rem] ">
              2024.03.28 - 2024.04.25
            </p>
          </div>
          <p className="text-[1.4rem] text-gray-700 leading-[2.6rem]">
            카공여지도는 공부하기 좋은 카페를 추천해주는 웹 어플리케이션입니다.
            멋쟁이사자처럼 프론트엔드 스쿨 수업에서 팀을 구성해 기획, 디자인,
            프론드엔드 개발까지 완성했습니다.
          </p>
          <ul className="pagelist mt-4 flex gap-3 font-extrabold underline font-MarkPro text-blue-600">
            <li className="current mb-2 ">
              <Link to="">배포 URL</Link>
            </li>
            <li className="mb-2 ">
              <Link to="">Github</Link>
            </li>
          </ul>
          <h2 className="text-[1.8rem] font-extrabold mt-24">구현 의도</h2>
          <img
            src="/work/spotify/logo.png"
            alt="카공여지도 여정"
            className="my-4"
          />
          <p className="text-[1.4rem] text-gray-700  leading-[2.6rem]">
            홈 페이지 : Swiper로 광고 이미지를 홈 화면에 띄우고, 데이터를 불러와
            카페 리스트를 보여주었습니다. 카페 리스트 + 무한 스크롤 : React
            Query로 카페 리스트를 불러오고, 무한 스크롤로 데이터를 6개씩 불러와
            데이터 로딩 속도를 개선했습니다. 북마크 + 북마크 리스트 : 특정
            유저가 저장한 카페의 동일한 순서가 담긴 id 값을 추가, 제거할 수 있는
            북마크 기능을 구현하였습니다. 리뷰 리스트 : 저장된 리뷰 리스트를
            불러왔습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
