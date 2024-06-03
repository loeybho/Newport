import Footer from "@components/Footer";
import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Layout() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);
  const flair = useRef();

  const handleOpenModal = () => {
    setModalOpen(!modalOpen);
  };

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

        {!modalOpen && (
          <div>
            <nav className="flex justify-between z-40 fixed top-0 w-full text-white px-14 py-8">
              <button>
                <img
                  className="w-[7rem]"
                  onClick={onEnter}
                  src="/flower.svg"
                  alt=""
                />
              </button>
              <button onClick={handleOpenModal}>
                <img src="/menu.svg" className="w-14" alt="" />
              </button>
            </nav>
            <Outlet />
            <Footer />
          </div>
        )}

        {modalOpen && (
          <div ref={modalRef} className="h-screen bg-teal-700">
            <button className="bg-orange" onClick={handleOpenModal}>
              버튼
            </button>
            <h1 style={{ textAlign: "center" }}>모달창</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Layout;
