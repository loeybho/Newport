import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import Lenis from "lenis";
function App() {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
