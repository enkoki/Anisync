import AboutIcon from "./AboutIcons.jsx";
import Icon1 from "../../assets/icons/stats-1.svg";
import Icon2 from "../../assets/icons/apps-1.svg";
import Icon3 from "../../assets/icons/social-1.svg";
import Icon4 from "../../assets/icons/custom-1.svg";

function AboutIconsFeatures() {
  return (
    <div className="flex flex-col items-center text-white w-screen h-200 p-30">
      <div className="w-[500px] h-[100px] text-[64px] font-black">
        WHY
        <span className="bg-[#6A00FF] rounded-[15px] m-[16px] h-[100px] p-3">
          ANYSYNC
        </span>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 w-screen h-[500px] place-items-center gap-40">
        <AboutIcon source={Icon1.src} />
        <AboutIcon source={Icon2.src} />
        <AboutIcon source={Icon3.src} />
        <AboutIcon source={Icon4.src} />
      </div>
    </div>
  );
}
export default AboutIconsFeatures;
