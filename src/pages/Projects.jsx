import { Link } from "react-router-dom"; // Link를 사용하기 위해 import

export default function Projects() {
  return (
    <>
      <div className="bg-customBlack h-screen p-20">
        <h1 className="text-[4rem] text-white font-MarkPros font-bold pt-4 sm:pt-24 mb-28 sm:text-[6rem]">
          Projects
        </h1>
        <Link to="/project1" className="text-blue-500 hover:underline">
          <div className="flex justify-center m-2 p-2 border-1 bg-red-400">
            <div className="w-1/2 mr-4">
              <h2 className="text-white text-2xl font-semibold mb-2">
                프로젝트 1
              </h2>
              <p className="text-white mb-4">
                이 프로젝트는 XXX에 대한 설명입니다. 더 자세한 내용을 보려면
                아래 링크를 클릭하세요.
              </p>
              <div className="mb-4">
                <h3 className="text-white font-semibold mb-2">기술 스택:</h3>
                <ul className=" text-white flex">
                  <li>기술1</li>
                  <li>기술2</li>
                  <li>기술3</li>
                </ul>
              </div>
              <button>클릭하여 자세히 보기</button>
            </div>
            <div className="w-1/2 ml-4">
              <img
                src="이미지 주소"
                alt="프로젝트 이미지"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
