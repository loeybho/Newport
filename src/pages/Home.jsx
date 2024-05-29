import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

export default function Home() {
  gsap.registerPlugin(useGSAP);
  const container = useRef();

  useGSAP(
    () => {
      // gsap code here...
      gsap.to(".box", { rotation: 180 }); // <-- automatically reverted
    },
    { scope: container }
  ); // <-- scope for selector text (optional)

  return (
    <div ref={container} className="app">
      <div className="box">Hello</div>
    </div>
  );
}
