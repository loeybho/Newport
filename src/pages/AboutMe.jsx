import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll } from "framer-motion";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const container = useRef();
  const texts = useRef([]);
  const paragraphs = useRef([]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end", "start"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      texts.current.forEach((text, i) => {
        text.setAttribute("startOffset", e * 35 + "%");
      });
    });
  }, []);

  useEffect(() => {
    paragraphs.current.forEach((paragraph, index) => {
      gsap.fromTo(
        paragraph,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.4,
          scrollTrigger: {
            trigger: paragraph,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const data = [
    {
      question: "별님은 어떤 사람인가요?",
      answer:
        "저는 약 2년간 그래픽 디자이너로 20개 이상의 브랜드를 디자인했어요. 화면을 완성하는 과정에서 즐거움과 만족감을 느껴 개발을 배우기 시작했어요. 기본에 충실하고, 꾸준히 배우며 성장하는 소프트웨어 엔지니어가 되고 싶어요.",
    },
    {
      question: "별님은 어떻게 일을 해왔나요?",
      answer:
        "전공에 갇히기 보단 기획, 디자인, 영상 등 새로운 업무에 적극적으로 도전해왔어요. 단순한 업무 수행이 아닌, 제가 속한 조직과 함께 성장하고 발전하기 위해 노력했어요. 지금껏 그래왔듯이 기존의 지식을 고집하기보단, 새로운 지식을 학습하는",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-customBlue text-white">
        <div className="pt-40 p-10 sm:p-20">
          <h1 className="text-[4rem] font-MarkPros font-bold mt-4 sm:mt-24 mb-28 sm:text-[6rem]">
            About Me
          </h1>

          <div
            className=" font-NanumSquareNeo flex flex-col gap-10 text-[1rem] sm:text-[2rem]"
            ref={container}
          >
            {data.map((item, index) => (
              <div key={index} className="m-4 flex flex-col gap-4">
                <p
                  className="bg-customYellow text-slate-900 relative rounded-lg p-5 font-bold self-start"
                  ref={(el) => (paragraphs.current[index * 2 + 1] = el)}
                >
                  {item.question}
                  <div className="absolute w-6 h-4 top-2 left-0 -ml-6 border-l-transparent border-l-[12px] border-r-transparent border-r-[9px] border-b-[#FFE400] border-b-[32px] rotate-[-90deg]"></div>
                </p>

                <p
                  className="bg-gray-50 text-gray-700 relative rounded-lg p-5 font-bold self-end w-3/4 sm:w-3/4 md:w-3/4 lg:w-3/4 xl:w-3/4"
                  ref={(el) => (paragraphs.current[index * 2 + 2] = el)}
                  style={{ marginTop: "auto" }}
                >
                  <span className="leading-relaxed " ref={container}>
                    {item.answer}
                  </span>
                  <div className="absolute w-6 h-4 top-0 right-0 -mr-6 border-l-transparent border-l-[12px] border-r-transparent border-r-[9px] border-b-[#FFE] border-b-[32px] rotate-[90deg]"></div>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <svg viewBox="10 0 200 100">
            <path
              id="curve"
              fill="none"
              d="m0,56.5c30,-10,30,-30,60,-30c30,0,30,20,60,20c30,0,30,-20,60,-20c30,0,30,10,60,30c30,20,30,30,60,30"
            />
            <text className="text-[1rem] sm:text-[0.7rem]" fill="white">
              <textPath ref={(ref) => (texts.current[0] = ref)} href="#curve">
                유연한 개발자가 될게요 🧚
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </>
  );
}
