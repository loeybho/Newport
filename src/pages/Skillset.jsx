export default function Skillset() {
  return (
    <>
      <div className="h-screen bg-slate-100">
        <div
          className="pt-28
         pl-16"
        >
          <h1 className="text-8xl text-slate-900 font-MarkPros font-bold">
            Skillset
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8 mx-16 text-white">
          <div className="bg-customBlack p-4 rounded-lg">
            <h2 className="text-4xl font-MarkPro font-bold p-4 flex justify-center">
              Frontend Tools
            </h2>
            <ul className="flex justify-center gap-4 flex-wrap">
              <li className="">
                <img
                  className="w-28"
                  src="https://skillicons.dev/icons?i=html"
                />
              </li>
              <li>
                <img
                  className="w-28
                  "
                  src="https://skillicons.dev/icons?i=css"
                />
              </li>
              <li>
                <img
                  className="w-28
                "
                  src="https://skillicons.dev/icons?i=js"
                />
              </li>
              <li>
                <img
                  className="w-28
                  "
                  src="https://skillicons.dev/icons?i=react"
                />
              </li>{" "}
              <li>
                <img
                  className="w-28
                  "
                  src="https://skillicons.dev/icons?i=nextjs"
                />
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Design</h2>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Figma</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Git</h2>
            <ul>
              <li>Git Version Control</li>
              <li>Github</li>
              <li>GitLab</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
