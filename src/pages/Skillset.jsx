export default function Skillset() {
  const frontendSkills = [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "js" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Styled-Components", icon: "styledcomponents" },
    { name: "Tailwind", icon: "tailwind" },
    { name: "TypeScript", icon: "ts" },
    { name: "Vite", icon: "vite" },
    { name: "Netlify", icon: "netlify" },
    { name: "Vercel", icon: "vercel" },
  ];

  const designSkills = [
    { name: "Figma", icon: "figma" },
    { name: "Photoshop", icon: "ps" },
    { name: "Illustration", icon: "ai" },
    { name: "Premiere Pro", icon: "pr" },
  ];

  const productivitySkills = [
    { name: "Git", icon: "git" },
    { name: "Github", icon: "github" },
    { name: "VScode", icon: "vscode" },
    { name: "Notion", icon: "notion" },
    { name: "Postman", icon: "postman" },
  ];

  return (
    <>
      <div className="bg-slate-100 pb-28">
        <div className="pt-28 pl-16">
          <h1 className="text-8xl text-slate-900 font-MarkPros font-bold">
            Skillset
          </h1>
        </div>

        <div className="grid gap-20 m-8 text-white">
          <div className="bg-customBlack p-20 rounded-lg">
            <h2 className="text-4xl font-MarkPro font-bold pb-14 flex justify-center">
              Frontend Tools
            </h2>
            <ul className="flex justify-center gap-4 flex-wrap text-slate-300">
              {frontendSkills.map((skill) => (
                <li key={skill.name} className="relative w-16 sm:w-28">
                  <div className="group w-full h-full">
                    <img
                      className="w-full h-full object-contain transition-transform duration-500 transform group-hover:translate-x-full"
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    />
                    <span className="text-2xl font-bold absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {skill.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-customBlack p-20 rounded-lg">
            <h2 className="text-4xl font-MarkPro font-bold pb-14 flex justify-center">
              Design Tools
            </h2>
            <ul className="flex justify-center gap-4 flex-wrap text-slate-300">
              {designSkills.map((skill) => (
                <li key={skill.name} className="relative w-16 sm:w-28">
                  <div className="group w-full h-full">
                    <img
                      className="w-full h-full object-contain transition-transform duration-500 transform group-hover:translate-x-full"
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    />
                    <span className="text-2xl font-bold absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {skill.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-customBlack p-20 rounded-lg">
            <h2 className="text-[2rem] font-MarkPro font-bold pb-14 flex justify-center">
              Productivity Tools
            </h2>
            <ul className="flex justify-center gap-4 flex-wrap text-slate-300">
              {productivitySkills.map((skill) => (
                <li key={skill.name} className="relative w-16 sm:w-28">
                  <div className="group w-full h-full">
                    <img
                      className="w-full h-full object-contain transition-transform duration-500 transform group-hover:translate-x-full"
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    />
                    <span className="text-2xl font-bold absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {skill.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
