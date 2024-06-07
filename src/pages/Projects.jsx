import React, { useState } from "react";

export default function Projects() {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const tabs = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
  ];

  const renderLeftContent = () => {
    switch (selectedTab) {
      case 1:
        return (
          <div className="flex flex-col">
            <h2 className="text-lg font-bold">1 / 4</h2>
            <h1 className="text-3xl font-bold mb-4">카공여지도</h1>
            <p className="text-base mb-4">
              프로젝트 설명 Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nullam ac libero nec ipsum elementum venenatis nec vitae
              dui. 프로젝트 설명 Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam ac libero nec ipsum elementum venenatis
              nec 프로젝트 설명 Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam ac libero nec ipsum elementum venenatis
              nec 프로젝트 설명 Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Nullam ac libero nec ipsum elementum venenatis
              nec
            </p>
            <p className="text-base mb-4">
              기술 스택: React, Tailwind CSS, Firebase
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                배포 URL
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                GitHub
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-4xl font-bold">
            {selectedTab} 번째 내용입니다.
          </div>
        );
    }
  };

  return (
    <div className="h-screen bg-red-100 flex flex-col justify-center relative">
      <div className="flex flex-col absolute z-10 gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-4 px-1 border border-customBlack rounded-full focus:outline-none focus:border-blue-500 ${
              selectedTab === tab.id ? "bg-customGreen" : "bg-white"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 mt-16">
        <div className="bg-red-200 flex-grow p-8">{renderLeftContent()}</div>
        <div className="bg-blue-400 flex justify-center items-center">
          {selectedTab === 1 && (
            <img src="https://via.placeholder.com/400" alt="프로젝트 이미지" />
          )}
        </div>
      </div>
    </div>
  );
}
