import { Link } from "react-router-dom";

export default function ToyProjects() {
  // Array of project data
  const projects = [
    {
      title: "게임 페이지",
      link: "https://666c240995fe0cbb3f501386--gorgeous-sundae-b43ba9.netlify.app/",
      description: "HTML, CSS",
    },
    {
      title: "이벤트 페이지",
      link: "https://666c248895fe0cbca45013d6--courageous-froyo-0093ce.netlify.app/",
      description: "Web Publishing, HTML, CSS",
    },
    {
      title: "도라에몽 애니메이션",
      link: "https://666c23c03d4ad06959aa6880--classy-biscotti-539a11.netlify.app/",
      description: "HTML, CSS",
    },
    {
      title: "네이버 로그인",
      link: "https://666c2128a4a96915e24849a9--regal-tiramisu-a90d9e.netlify.app/",
      description: "HTML, CSS, Javascript",
    },
    {
      title: "쥬스 광고 페이지",
      link: "https://666c25827ab3242a07de8796--vermillion-granita-6d8e9c.netlify.app/",
      description: "Web Publishing, HTML, CSS",
    },
    {
      title: "엘리멘탈 광고 페이지",
      link: "https://666c2644e5d72b7a71cf805d--sprightly-rugelach-c0acfd.netlify.app/",
      description: "HTML, CSS, Javascript",
    },
    {
      title: "질문 리스트",
      link: "https://666c24d956f07c776e1b05c5--lucky-concha-a19cfc.netlify.app/",
      description: "HTML, CSS",
    },
    {
      title: "이력서가 포함된 포트폴리오",
      link: "https://byeolportfolio.netlify.app/",
      description: "React, Swiper",
    },
    {
      title: "프로필",
      link: "https://gleeful-taiyaki-8bfb20.netlify.app/",
      description: "HTML, CSS",
    },
    {
      title: "모달 만들기",
      link: "https://666c2232273aa96bd603b5a7--incomparable-gumdrop-218b3f.netlify.app/",
      description: "HTML, CSS",
    },
  ];

  // Function to generate random RGB color
  const getRandomColor = () => {
    const min = 180; // Minimum RGB value for bright pastel colors
    const range = 140; // Range for random values to add to the minimum

    const r = Math.floor(Math.random() * range + min); // Red component
    const g = Math.floor(Math.random() * range + min); // Green component
    const b = Math.floor(Math.random() * range + min); // Blue component

    return `rgb(${r},${g},${b})`;
  };

  return (
    <div className="bg-customBlack p-16">
      <div className="pt-28 text-center">
        <h1 className="text-4xl sm:text-6xl text-white font-MarkPros font-bold mt-4 sm:mt-24 mb-28">
          Toy Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded p-6 sm:p-16 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer"
              style={{
                minHeight: "10rem", // Minimum height to prevent items from collapsing
                aspectRatio: "2 / 1", // Aspect ratio for larger screens (2:1)
                backgroundColor: getRandomColor(), // Random bright pastel background color
              }}
            >
              <div className="flex flex-col h-full justify-center items-center">
                <h1 className="font-extrabold sm:text-1xl text-3xl md:text-2xl text-center mb-2">
                  {project.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-center">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
