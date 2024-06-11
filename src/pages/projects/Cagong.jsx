import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="bg-customBlack min-h-screen p-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-6 gap-4 md:grid-cols-4 sm:grid-cols-2">
        <div className="col-span-1 row-span-1 md:row-span-4 p-4">
          <h3 className="text-white text-lg font-bold">
            <Link to="/work/#contrib-list">rsms/work</Link>
          </h3>
          <div className="meta text-white mt-4">
            <p>
              2006–2010
              <br />
              <a href="https://spotify.com/" className="text-blue-400">
                spotify.com
              </a>
            </p>
          </div>
          <ul className="pagelist mt-4 text-white">
            <li className="current mb-2">
              <Link to="/work/spotify/">Spotify</Link>
            </li>
            <li className="mb-2">
              <Link to="/work/figma/">Figma</Link>
            </li>
            <li className="mb-2">
              <Link to="/work/inter/">Inter</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-3 sm:col-span-2 bg-white text-black p-4">
          <h1 id="my-work-with-spotify" className="text-3xl font-bold mb-4">
            My work with Spotify
          </h1>
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

          <h2 id="desktop-application" className="text-2xl font-bold mt-8">
            Desktop application
          </h2>
          <p>
            The Spotify desktop application come in a dark grey fashion and is
            used by millions of people every day, on Mac OS, Windows and Linux.
            Standard user interface treats like window controls and scrollbars
            obey the host system while we have taken some
            semi-conservative-but-still-daring steps for other elements.
          </p>
          <img
            src="/work/spotify/desktopapp.png"
            alt="Desktop UI Intro"
            className="my-4"
          />
          <p>Hand crafted pixels</p>
          <img
            src="/work/spotify/handcrafted-pixels.png"
            alt="Bits and Pieces"
            className="my-4"
          />
          <p>
            A dynamic user interface which offers a limited set including the
            most important features through clearly visible controls (like play,
            skip track, search, sharing, etc), while providing more advanced
            users with slightly less common functionality — e.g. resizing views,
            jumping to playing context, queueing tracks, and so on.
          </p>
          <img
            src="/work/spotify/desktopui.png"
            alt="More bits and Pieces"
            className="my-4"
          />
          <p>
            We also tried to keep settings to a minimum with thought-through
            &amp; sensible defaults.
          </p>
          <img
            src="/work/spotify/hovering-art-directors.jpg"
            alt="And on the seventh day they invented digital beer"
            className="my-4"
          />
          <p>
            Pictured above: Per, Mattias &amp; Me stretching out some Mac OS
            interface issues.
          </p>

          <h2 id="mobile-applications" className="text-2xl font-bold mt-8">
            Mobile applications
          </h2>
          <p>
            Since Spotify is a service “in the cloud” and it’s all about music,
            people need to access Spotify wherever they are — on a bike,
            traveling abroad or just walking around in the city. We created
            Spotify client applications for a number of different devices and
            platforms including Apple iOS (i.e. iPhone), Android and Nokia S60.
          </p>
          <img
            src="/work/spotify/mobile-devices.jpg"
            alt="Mobile devices"
            className="my-4"
          />

          <h2 id="design-process" className="text-2xl font-bold mt-8">
            Design process
          </h2>
          <p>
            I’m the kind of designer who place myself closer to “architect” than
            “artist” in the spectrum of art–science ratio. Sketching on good old
            paper with a graphite pencil beats all (early-stages) prototyping
            software I’ve tried. It’s easy to interact with and everyone can
            join in.
          </p>
          <img
            src="/work/spotify/ui-sketch.jpg"
            alt="iPhone paper sketch"
            className="my-4"
          />
          <p>
            Marrying function with form is a natural part of human–machine
            interfaces, thus embedding notes on functionality and form when
            sketching out the rough flow comes natural and saves on bureaucracy.
          </p>
          <img
            src="/work/spotify/ui-sketch2.jpg"
            alt="iPhone paper sketch"
            className="my-4"
          />
          <img
            src="/work/spotify/hovering-ceo.jpg"
            alt="Daniel and Me going through some desktop app UI flow ideas"
            className="my-4"
          />
          <p>
            Keeping all stakeholders in the loop during the early stages of the
            design process is crucial.
          </p>
          <p>Later moving on with computer aided sketching and prototyping.</p>
          <img
            src="/work/spotify/flow-spreads.jpg"
            alt="iPhone dimension specs"
            className="my-4"
          />
          <p>
            Communicating component dimensions, colors, fonts, etc to the
            engineers was often done through simple print-outs.
          </p>
          <img src="/work/spotify/app-resources.png" alt="" className="my-4" />
          <p>
            Most graphic resources like icons and controls where first sketched
            on paper, then drawn as vector-based computer images and finally
            visualized by means of hand-crafted pixels, ending up as PNG image
            data.
          </p>

          <h2 id="culture" className="text-2xl font-bold mt-8">
            Culture
          </h2>
          <p>
            The Spotify culture has always played an important role in the
            (internal) success of Spotify. Ever since day one there have been
            that “happy start-up” feeling where mottos like “if we have fun we
            will produce good stuff” fit in.
          </p>
          <img
            src="/work/spotify/alpha-release-group-photo.jpg"
            alt="Spotify 0.1.0"
            className="my-4"
          />
          <p>
            <em>Above</em> Here we are in 2007. We had just finished the very
            first release of Spotify to which friends and family where given
            access. In contrast; three years later there are more than 200
            people employed by Spotify in seven different countries.
          </p>
          <img
            src="/work/spotify/bobbie-and-sophia.jpg"
            alt="Behave!"
            className="my-4"
          />
          <p>
            Roberta and Sophia, probably plotting{" "}
            <a
              href="http://www.independent.co.uk/life-style/gadgets-and-tech/features/tim-walker-like-a-charity-mugger-roberta-from-spotify-is-secretly-after-my-money-1667721.html"
              className="text-blue-400"
            >
              “Roberta from Spotify”
            </a>
            .
          </p>
          <img
            src="/work/spotify/berlin.jpg"
            alt="Code shall be written with style"
            className="my-4"
          />
          <p>Code, code, code and dance music.</p>
          <img
            src="/work/spotify/bbq.jpg"
            alt="You look sooo Scottish with those glasses"
            className="my-4"
          />
          <p>
            <a
              href="https://www.flickr.com/photos/rsms/tags/spotify/"
              className="text-blue-400"
            >
              More photos from the early and late life of Spotify →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
