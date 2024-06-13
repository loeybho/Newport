import { Link } from "react-router-dom";
import wanderLensLogo from "@assets/01_wanderlens.png";
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
              <img src={wanderLensLogo} alt="WanderLens Logo" />
              WanderLens Projects
            </Link>
          </h3>
        </div>

        <div className="col-span-5 md:col-span-3 sm:col-span-2 bg-white text-customBlack p-10">
          <h1 className="text-[2.2rem] font-extrabold mb-4">WanderLens</h1>
          <div className="mt-4 mb-4">
            <p className="text-gray-500 text-[1.2rem]">
              2024.06.13 - 2024.07.10
            </p>
          </div>
          <div className="p-10">
            <img src={wanderLensLogo} className="w-1/2" alt="WanderLens Logo" />
          </div>

          <p className="text-[1.4rem] text-gray-700 leading-[2.6rem]">
            WanderLens is a web application that helps users discover
            picturesque travel destinations and plan their trips effectively.
            Developed during a bootcamp project in collaboration with frontend,
            backend developers, and designers.
          </p>
          <ul className="pagelist mt-4 text-[1.4rem] flex gap-3 font-extrabold underline font-MarkPro text-blue-600">
            <li className="current mb-2">
              <Link to="https://wanderlensapp.netlify.app/" target="_blank">
                Deployment URL
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="https://github.com/yourusername/WanderLens"
                target="_blank"
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
