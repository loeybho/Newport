import { Link } from "react-router-dom";

export default function Cagong() {
  return (
    <div className="bg-customBeige min-h-screen p-4 text-gray-600 font-medium">
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
          <h1 id="my-work-with-spotify" className="text-3xl font-bold mb-4">
            My work with Spotify
          </h1>
          <div className="mt-4 mb-4">
            <p className="text-gray-400 font-normal">2024.03.28 - 2024.04.25</p>
          </div>
          <p>
            I’ve been part of{" "}
            <a href="https://www.spotify.com/" className="text-blue-400">
              Spotify
            </a>{" "}
            since day one (up until September 2010 when I joined{" "}
            <a href="https://www.facebook.com/" className="text-blue-400">
              Facebook
            </a>
            ). The lush green, the dull gray, the innovative user interface —
            that’s me.
          </p>
          <p>
            I was the head of everything-design — creative &amp; art director,
            interaction designer and graphic designer as well as shooting both
            still and moving pictures. The brand identity (logotype, business
            cards, style guides, office architecture, etc) is my work as well as
            the different end user client applications (interaction design).
          </p>
          <ul className="pagelist mt-4 flex gap-3 ">
            <li className="current mb-2 ">
              <Link to="/work/spotify/">배포 URL</Link>
            </li>
            <li className="mb-2 ">
              <Link to="/work/figma/">Github</Link>
            </li>
          </ul>
          <h2 id="the-spotify-brand" className="text-2xl font-bold mt-8">
            The Spotify brand
          </h2>
          <img
            src="/work/spotify/logo.png"
            alt="Spotify master brand logotype"
            className="my-4"
          />
          <p>Spotify is green. We’re talking Pantone 376 green.</p>
          <img
            src="/work/spotify/lagom.png"
            alt="Spotify lagom"
            className="my-4"
          />
          <img
            src="/work/spotify/appicons.png"
            alt="Application icons"
            className="my-4"
          />
          <p>
            My busy desk in our first office at Riddargatan 20 in Stockholm:
          </p>
          <img src="/work/spotify/desk.jpg" alt="My desk" className="my-4" />
        </div>
      </div>
    </div>
  );
}
