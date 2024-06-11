export default function ProjectItem() {
  const renderLeftContent = () => {
    switch (selectedTab) {
      case 1:
        return (
          <>
            <div className="p-6 flex flex-col min-h-[350px]">
              <p className="">
                공부하기 좋은 카페를 추천해주는 웹 어플리케이션입니다.
                멋쟁이사자처럼 프론트엔드 스쿨 수업에서 팀을 구성해 기획,
                디자인, 프론드엔드 개발까지 완성했습니다.
              </p>
              <p className="mb-6">React, Vite, Styled-Components</p>
              <div className="flex">
                <NewButton props="props">배포 URL</NewButton>
                <NewButton props="props">Github</NewButton>
              </div>
            </div>
          </>
        );

      default:
        return (
          <div className="text-4xl font-bold min-h-[350px]">
            {selectedTab} 번째 내용입니다.
          </div>
        );
    }
  };

  return (
    <div className="bg-customLightGray flex flex-col justify-center relative font-NanumSquareNeo text-customBlack p-12">
      <div className="flex flex-col absolute z-10 gap-2 m-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-6 px-2  border-[2px] border-customBlack ${
              selectedTab === tab.id ? "bg-customBlack" : "transparent"
            }`}
            onClick={() => handleTabClick(tab.id)}
          ></button>
        ))}
      </div>
      <div className="p-9">
        <div className="p-14">
          <p className="text-lg mb-2 text-gray-500">1 / 4</p>
          <h1 className="text-4xl font-black">카공여지도</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex-grow m-8">{renderLeftContent()}</div>
          <div className="flex justify-center p-12">
            {selectedTab === 1 && (
              <img
                className="w-full"
                src="https://via.placeholder.com/400"
                alt="프로젝트 이미지"
              />
            )}
          </div>
        </div>
      </div>
    </div>ㅔㄱ
  );
}
