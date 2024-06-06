import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Stream() {
  const container = useRef();
  const texts = useRef([]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      texts.current.forEach((text, i) => {
        text.setAttribute("startOffset", -20 + i * 30 + e * 40 + "%");
      });
    });
  }, []);

  return (
    <div ref={container}>
      <svg className="mb-40" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="text-[6px]" style={{ color: "red" }}>
          {[...Array(3)].map((_, i) => {
            return (
              <textPath
                ref={(ref) => (texts.current[i] = ref)}
                href="#curve"
                startOffset={i * 40 + "%"}
              >
                학습에 유연한 태도를 지향하고
              </textPath>
            );
          })}
        </text>
      </svg>
      <div className="h-[250px]"></div>
    </div>
  );
}
