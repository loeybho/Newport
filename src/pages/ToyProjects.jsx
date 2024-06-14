import { Link } from "react-router-dom";

export default function ToyProjects() {
  return (
    <>
      <div className="bg-customBlack p-16">
        <div className="pt-28">
          <h1 className="text-[4rem] text-white font-MarkPros font-bold mt-4 sm:mt-24 mb-28 sm:text-[6rem]">
            Toy Projects
          </h1>

          <div className="grid grid-cols-3 gap-10">
            <Link
              to="https://666c240995fe0cbb3f501386--gorgeous-sundae-b43ba9.netlify.app/"
              target="_blank"
            >
              <div className=" bg-slate-100 rounded flex flex-col p-16 gap-2 opacity-80 justify-center items-center h-20 text-customBlack hover:opacity-100 transition duration-300  cursor-pointer">
                <h1 className="font-extrabold text-[1.3rem] text-center">
                  게임 페이지
                </h1>
                <p>HTML, CSS</p>
              </div>
            </Link>

            <Link
              to="https://666c248895fe0cbca45013d6--courageous-froyo-0093ce.netlify.app/"
              target="_blank"
            >
              <div className=" bg-slate-100 rounded flex flex-col p-16 gap-2 opacity-80 justify-center items-center h-20 text-customBlack hover:opacity-100 transition duration-300  cursor-pointer">
                <h1 className="font-extrabold text-[1.3rem] text-center">
                  이벤트 페이지
                </h1>
                <p>Web Publishing, HTML, CSS</p>
              </div>
            </Link>

            <Link
              to="https://666c23c03d4ad06959aa6880--classy-biscotti-539a11.netlify.app/"
              target="_blank"
            >
              <div className=" bg-slate-100 rounded flex flex-col p-16 gap-2 opacity-80 justify-center items-center h-20 text-customBlack hover:opacity-100 transition duration-300  cursor-pointer">
                <h1 className="font-extrabold text-[1.3rem] text-center">
                  도라에몽 애니메이션
                </h1>
                <p>HTML, CSS</p>
              </div>
            </Link>

            <Link
              to="https://666c2128a4a96915e24849a9--regal-tiramisu-a90d9e.netlify.app/"
              target="_blank"
            >
              <div className=" bg-slate-100 rounded flex flex-col p-16 gap-2 opacity-80 justify-center items-center h-20 text-customBlack hover:opacity-100 transition duration-300  cursor-pointer">
                <h1 className="font-extrabold text-[1.3rem] text-center">
                  네이버 로그인
                </h1>
                <p>HTML, CSS, Javascript</p>
              </div>
            </Link>

            <Link
              to="https://666c25827ab3242a07de8796--vermillion-granita-6d8e9c.netlify.app/"
              target="_blank"
            >
              <div className=" bg-slate-100 rounded flex flex-col p-16 gap-2 opacity-80 justify-center items-center h-20 text-customBlack hover:opacity-100 transition duration-300  cursor-pointer">
                <h1 className="font-extrabold text-[1.3rem] text-center">
                  쥬스 광고 페이지
                </h1>
                <p>Web Publishing, HTML, CSS</p>
              </div>
            </Link>

            <Link
              to="https://666c2644e5d72b7a71cf805d--sprightly-rugelach-c0acfd.netlify.app/"
              target="_blank"
            >
              <div className=" bg-slate-100 rounded flex flex-col p-16 gap-2 opacity-80 justify-center items-center h-20 text-customBlack hover:opacity-100 transition duration-300  cursor-pointer">
                <h1 className="font-extrabold text-[1.3rem] text-center">
                  엘리멘탈 광고 페이지
                </h1>
                <p>HTML, CSS, Javascript</p>
              </div>
            </Link>

            <Link
              to="https://666c24d956f07c776e1b05c5--lucky-concha-a19cfc.netlify.app/"
              target="_blank"
            >
              <div className=" bg-slate-100 rounded flex flex-col p-16 gap-2 opacity-80 justify-center items-center h-20 text-customBlack hover:opacity-100 transition duration-300  cursor-pointer">
                <h1 className="font-extrabold text-[1.3rem] text-center">
                  질문 리스트
                </h1>
                <p>HTML, CSS</p>
              </div>
            </Link>

            <Link to="https://byeolportfolio.netlify.app/" target="_blank">
              <div className=" bg-slate-100 rounded flex flex-col p-16 gap-2 opacity-80 justify-center items-center h-20 text-customBlack hover:opacity-100 transition duration-300  cursor-pointer">
                <h1 className="font-extrabold text-[1.3rem] text-center">
                  이력서가 포함된
                  <br />
                  포트폴리오
                </h1>
                <p>React, Swiper</p>
              </div>
            </Link>

            <Link
              to="https://gleeful-taiyaki-8bfb20.netlify.app/"
              target="_blank"
            >
              <div className=" bg-slate-100 rounded flex flex-col p-16 gap-2 opacity-80 justify-center items-center h-20 text-customBlack hover:opacity-100 transition duration-300  cursor-pointer">
                <h1 className="font-extrabold text-[1.3rem] text-center">
                  프로필
                </h1>
                <p>HTML, CSS</p>
              </div>
            </Link>

            <Link
              to="https://666c2232273aa96bd603b5a7--incomparable-gumdrop-218b3f.netlify.app/"
              target="_blank"
            >
              <div className=" bg-slate-100 rounded flex flex-col p-16 gap-2 opacity-80 justify-center items-center h-20 text-customBlack hover:opacity-100 transition duration-300  cursor-pointer">
                <h1 className="font-extrabold text-[1.3rem] text-center">
                  모달 만들기
                </h1>
                <p>HTML, CSS</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
