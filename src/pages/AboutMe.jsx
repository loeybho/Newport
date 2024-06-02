import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutMe() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#circle1", {
      scrollTrigger: {
        trigger: "#area2",
        start: "top center",
        end: "+=250",
        scrub: true,
      },
      x: 300,
      duration: 2,
    });
  }, []);

  return (
    <div id="h-screen">
      <div id="area1" className="h-80 bg-red-400">
        About ME 물처럼 어떤 컵에든 유연하게 담기는 개발자 ~
      </div>
      <div id="area2" className="bg-orange-500 h-80">
        <div id="circle1" className="bg-red-100 w-40">
          circle1
        </div>
        <div id="circle2" className="bg-blue-100 w-40">
          circle2
        </div>
      </div>
      <div id="area3" className="h-80 bg-yellow-400"></div>
    </div>
  );
}
