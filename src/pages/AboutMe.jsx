import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AboutMe() {
  const container = useRef();
  const texts = useRef([]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      texts.current.forEach((text, i) => {
        text.setAttribute("startOffset", -15 + i * 30 + e * 30 + "%");
      });
    });
  }, []);

  return (
    <>
      <div ref={container}>
        <svg className="bg-slate-900" viewBox="11 0 235 60">
          <path
            id="curve"
            fill="none"
            d="m0,56.5c30,-10,30,-30,60,-30c30,0,30,20,60,20c30,0,30,-20,60,-20c30,0,30,10,60,30c30,20,30,30,60,30"
          />
          <text className="text-[6px]" fill="white">
            {[...Array(3)].map((_, i) => {
              return (
                <textPath
                  key={i}
                  ref={(ref) => (texts.current[i] = ref)}
                  href="#curve"
                  startOffset={i * 40 + "%"}
                >
                  About Me 🧚
                </textPath>
              );
            })}
          </text>
        </svg>
        시작
        <div className="h-screen bg-slate-900 text-white">
          <div className="pt-40 pl-16 bg-black">
            <h1 className="text-8xl font-MarkPros font-bold">About Me</h1>

            <div className="font-NanumSquareNeo flex flex-col gap-5 text-3xl ">
              <div>
                <p className="bg-customYellow text-slate-900 relative rounded-lg inline-block p-5 font-bold">
                  별님은 어떤 사람인가요?
                  <div
                    style={{
                      marginLeft: "-24px",
                      borderLeft: "12px solid transparent",
                      borderRight: "9px solid transparent",
                      borderBottom: "32px solid #FFE400",
                      transform: "rotate(-90deg)",
                    }}
                    className="absolute w-6 h-4 top-2 left-0"
                  ></div>
                </p>

                <p className="leading-relaxed font-light">
                  저는 약 2년간 그래픽 디자이너로 20개 이상의 브랜드를
                  디자인했어요.
                  <br />
                  화면을 완성하는 과정에서 즐거움과 만족감을 느껴 개발을 배우기
                  시작했어요.
                  <br />
                  기본에 충실하고, 꾸준히 배우며 성장하는 소프트웨어 엔지니어가
                  되고 싶어요.
                </p>
              </div>
              <div>
                <p className="bg-customYellow text-slate-900 relative rounded-lg inline-block p-5 font-bold">
                  별님은 어떻게 일을 해왔나요?
                  <div
                    style={{
                      marginLeft: "-24px",
                      borderLeft: "12px solid transparent",
                      borderRight: "9px solid transparent",
                      borderBottom: "32px solid #FFE400",
                      transform: "rotate(-90deg)",
                    }}
                    className="absolute w-6 h-4 top-2 left-0"
                  ></div>
                </p>

                <p className="leading-relaxed font-light">
                  전공에 갇히기 보단 기획, 디자인, 영상 등 새로운 업무에
                  적극적으로 도전해왔어요.
                  <br />
                  단순한 업무 수행이 아닌, 제가 속한 조직과 함께 성장하고
                  발전하기 위해 노력했어요.
                  <br />
                  지금껏 그래왔듯이 기존의 지식을 고집하기보단, 새로운 지식을
                  학습하는 유연한 개발자가 될게요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
