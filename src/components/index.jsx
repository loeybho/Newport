import Footer from "@components/Footer";
import { useRef } from "react";
import { Outlet } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Layout() {
  const flair = useRef();

  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });

  const onEnter = contextSafe(({ currentTarget }) => {
    gsap.to(currentTarget, { rotation: "+=360" });
  });

  useGSAP(() => {
    const handleMouseMove = (e) => {
      const { left, top } = container.current.getBoundingClientRect();
      const { clientX, clientY } = e;
      const distance = 20;
      const targetX = clientX - left - distance;
      const targetY = clientY - top - distance;

      gsap.to(flair.current, {
        x: targetX,
        y: targetY,
        duration: 0.6,
        ease: "power3",
      });
    };

    container.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={container}>
        <div
          ref={flair}
          id="flair"
          className="rounded-full w-5 h-5 border-customBlack border-[3px] bg-customGreen absolute z-50"
        ></div>

        <div>
          <nav className="flex justify-between z-40 fixed top-0 w-full text-white px-4 py-2 sm:px-14 sm:py-10">
            <button>
              <img
                className="w-14 sm:w-24"
                onClick={onEnter}
                src="/flower.svg"
                alt="메인 로고"
              />
            </button>
          </nav>
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
