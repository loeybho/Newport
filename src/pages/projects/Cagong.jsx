import { Link } from "react-router-dom";
import cagong from "@assets/01_cagong.png";
import home_01 from "@assets/cagong/1_home01.jpeg";
import home_02 from "@assets/cagong/1_home02.jpeg";
import cafe_list_01 from "@assets/cagong/2_cafelist.jpeg";
import bookmark_01 from "@assets/cagong/3_bookmark.jpeg";
import bookmark_02 from "@assets/cagong/3_bookmark02.jpeg";
import review_list_01 from "@assets/cagong/4_review.jpeg";
import before from "@assets/cagong/5_before.jpeg";

export default function Cagong() {
  return (
    <div className="bg-customBeige min-h-screen p-4 text-gray-600 font-[600] font-NanumSquareNeo ">
      <div className=" max-w-screen-xl mx-auto gap-4 grid grid-cols-2 sm:flex">
        <div className="col-span-1 row-span-1 md:row-span-4 p-4">
          <h3 className="text-lg font-bold">
            <Link to="/work/#contrib-list">
              <img src="" alt="" />
              Byeol&apos; Projects
            </Link>
          </h3>

          {/* <ul className="pagelist mt-4 ">
            <li className="current mb-2 underline">
              <Link to="/work/spotify/">개발일지</Link>
            </li>
            <li className="mb-2 underline">
              <Link to="/work/figma/">구현의도</Link>
            </li>
          </ul> */}
        </div>
        <div className="col-span-5 md:col-span-3 sm:col-span-2 bg-white text-customBlack p-10">
          <h1 className="text-[2.2rem] font-extrabold mb-4">카공여지도</h1>
          <div className="mt-4 mb-4">
            <p className="text-gray-500 text-[1.2rem] ">
              2024.03.28 - 2024.04.25
            </p>
          </div>
          <div className="p-10">
            <img src={cagong} className="w-1/2" />
          </div>

          <p className="text-[1.4rem] text-gray-700 leading-[2.6rem]">
            카공여지도는 공부하기 좋은 카페를 추천해주는 웹 어플리케이션입니다.
            멋쟁이사자처럼 프론트엔드 스쿨 수업에서 진행된 팀 프로젝트로 기획,
            디자인, 프론드엔드 개발, 백엔드 개발자와 협업으로 완성되었습니다.
          </p>
          <ul className="pagelist mt-4 text-[1.4rem] flex gap-3 font-extrabold underline font-MarkPro text-blue-600">
            <li className="current mb-2 ">
              <Link to="https://cagongmap.netlify.app/" target="_blank">
                배포 URL
              </Link>
            </li>
            <li className="mb-2 ">
              <Link
                to="https://github.com/loeybho/Cagong/tree/main"
                target="_blank"
              >
                Github
              </Link>
            </li>
          </ul>

          <div>
            <h2 className="text-[1.8rem] font-extrabold mt-24 mb-10">
              저는 이런 기능을 구현했어요 👩‍💻
            </h2>

            <ul className="">
              <li className="text-[1.4rem] text-gray-700 mb-20 leading-[2.6rem]">
                <h3 className="font-extrabold mb-4">홈 페이지</h3>
                <div className="grid grid-cols-2 gap-10 pb-4 pt-4 mb-4">
                  <img
                    src={home_01}
                    alt="home_01"
                    className="w-full border-3 border-customBeige"
                  />
                  <img
                    src={home_02}
                    alt="home_02"
                    className="w-full border-3 border-customBeige"
                  />
                </div>

                <ul className="ml-7 list-disc">
                  <li className="mb-3">
                    <p className="">
                      메인 화면에 나오는 광고이미지, 카페 리스트를 효율적으로
                      노출시키기 위해 Swiper를 사용하여 페이지네이션 처리 후,
                      렌더링
                    </p>
                  </li>
                  <li>
                    <p className="">
                      추천하는 카페 데이터를 띄우기 위해 useCustomAxios 훅을
                      사용하여 Axios 인스턴스 생성 후, API 요청
                    </p>
                  </li>
                  <li>
                    <p className="">
                      react-query의 useQuery 훅을 사용하여 데이터를 비동기적으로
                      호출. select 옵션으로 응답 데이터를 필요한 형태로 변환
                    </p>
                  </li>
                </ul>
              </li>

              <li className="text-[1.4rem] text-gray-700 mb-20 leading-[2.6rem]">
                <h3 className="font-extrabold mb-4">카페 리스트</h3>
                <div className="grid grid-cols-2 gap-10 pb-4 pt-4 mb-4">
                  <img
                    src={cafe_list_01}
                    alt="cafe_list_01"
                    className="w-full border-3 border-customBeige"
                  />
                </div>

                <ul className="ml-7 list-disc">
                  <li className="mb-3">
                    <p className="">
                      CafeListItem이라는 컴포넌트를 구현하여 카페리스트와 홈에
                      공통적으로 사용, 코드 효율성 증대
                    </p>
                  </li>
                  <li>
                    <p className="">
                      useInfiniteQuery 훅을 사용하여 데이터 6개씩 가져오는 무한
                      스크롤 로직 구현, 데이터의 로딩 속도 개선
                    </p>
                    <p className="">
                      getNextPageParam 함수를 사용하여 다음 페이지의 매개 변수
                      설정. 페이지 정보를 받은 후 다음 페이지를 계산하게끔 로직
                      구현
                    </p>
                  </li>
                </ul>
              </li>

              <li className="text-[1.4rem] text-gray-700 mb-20 leading-[2.6rem]">
                <h3 className="font-extrabold mb-4">북마크</h3>
                <div className="grid grid-cols-2 gap-10 pb-4 pt-4 mb-4">
                  <img
                    src={bookmark_01}
                    alt="bookmark_01"
                    className="w-full border-3 border-customBeige"
                  />
                  <img
                    src={bookmark_02}
                    alt="bookmark_02"
                    className="w-full border-3 border-customBeige"
                  />
                </div>

                <ul className="ml-7 list-disc">
                  <li className="mb-3">
                    <p className="">
                      (왼쪽 이미지) 개별 카페 페이지로 이동 시, 데이터가 있고,
                      그 중 cafeId와 일치하는 북마크 항목을 찾으면, 해당
                      아이템이 북마크된 상태로 간주하여 setIsBookmarked(true)와
                      setBookmarkId(foundItem._id)를 호출하여 상태 업데이트.
                      <br />
                      항목을 찾지 못하면 북마크가 되어 있지 않은 상태로 설정되어
                      빈 북마크 SVG 렌더링.
                      <br />
                      데이터가 없거나 사용자가 로그인하지 않은 경우에는 북마크
                      상태를 false 처리
                    </p>
                  </li>
                  <li className="mb-3">
                    <p className="">
                      (오른쪽 이미지)deleteBookmark 함수는 axios를 사용하여 특정
                      북마크 아이템을 삭제. 삭제된 후의 북마크 목록을 업데이트.
                      <br />
                      useEffect 훅을 사용하여 데이터가 변경될 때마다 북마크 상태
                      변경
                    </p>
                  </li>
                </ul>
              </li>

              <li className="text-[1.4rem] text-gray-700 mb-20 leading-[2.6rem]">
                <h3 className="font-extrabold mb-4">그 외</h3>
                <div className="grid grid-cols-2 gap-10 pb-4 pt-4 mb-4">
                  <img
                    src={review_list_01}
                    alt="review_list_01"
                    className="w-full border-3 border-customBeige"
                  />
                  <img
                    src={before}
                    alt="before_login"
                    className="w-full border-3 border-customBeige"
                  />
                </div>

                <ul className="ml-7 list-disc">
                  <li className="mb-3">
                    <p className="">
                      저장된 리뷰 리스트 데이터를 불러오는 페이지 구현{" "}
                    </p>
                  </li>
                  <li className="mb-3">
                    <p className="">
                      로그인 이동 페이지를 구현하여, 사용자가 명확한 안내와 함께
                      로그인 페이지로 이동할 수 잇는 링크 제공
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
