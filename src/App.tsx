import "./App.css";
import { Search, Mic, ChevronDown, Plus } from "lucide-react";
import { useState } from "react";
import bgGradientSvg from "./assets/images/bg_gradient.svg?url";
import logoDiaSvg from "./assets/images/logo_dia.svg?url";

function App() {
  const [bgGradientSrc, setBgGradientSrc] = useState(bgGradientSvg);

  const handleLogoClick = () => {
    setBgGradientSrc(bgGradientSvg + "?v=" + new Date().getTime());
  };

  return (
    <div className="relative flex justify-center items-center bg-neutral-50 h-screen overflow-hidden select-none">
      {/* Background gradient */}
      <img
        id="bg-gradient"
        src={bgGradientSrc}
        alt="Background Gradient"
        className="top-24 absolute opacity-5 w-full max-w-[1600px] h-auto pointer-events-none z-0"
      />

      {/* Blend Shadow */}
      <div className="absolute translate-y-9 w-164 h-32 bg-black blur-sm mix-blend-overlay rounded-4xl" ></div>

      <div className="z-10 relative flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <img
            src={logoDiaSvg}
            alt="Dia Logo"
            className="w-10 h-10 logo-transition"
            onClick={handleLogoClick}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter =
                "brightness(0) saturate(100%) invert(52%) sepia(15%) saturate(1234%) hue-rotate(225deg) brightness(91%) contrast(89%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter =
                "brightness(0) saturate(100%) invert(88%) sepia(1%) saturate(1%) hue-rotate(314deg) brightness(95%) contrast(96%)";
            }}
          />
        </div>

        {/* Search Box */}
        <div
          className="search-box flex flex-col bg-white custom-shadow border border-neutral-100 rounded-3xl"
          style={{
            width: "640px",
            height: "112px",
          }}
        >
          {/* Input */}
          <div className="flex flex-1 items-center pr-3 pl-4">
            <Search className="mr-3 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              className="flex-1 outline-none text-neutral-700 text-base"
              placeholder="Search the web…"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-1 justify-between items-center pr-3 pl-4">
            <div className="group flex items-center gap-2">
              <div className="transition-colors duration-200">
                <Plus className="w-4 h-4 text-neutral-300 group-hover:text-neutral-400 transition-colors duration-200" />
              </div>
              <span className="text-neutral-300 group-hover:text-neutral-400 text-base transition-colors duration-200 select-none">
                Add tabs or files
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="group p-2 transition-colors duration-200">
                <Mic className="w-5 h-5 text-neutral-300 group-hover:text-neutral-400 transition-colors duration-200" />
              </div>
              <div className="bg-neutral-100 hover:bg-neutral-200 p-1.5 rounded-full transition-colors duration-200">
                <ChevronDown className="w-5 h-5 text-neutral-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
