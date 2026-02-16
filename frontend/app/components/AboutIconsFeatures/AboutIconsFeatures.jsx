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
        <AboutIcon
          source={Icon1.src}
          heading="Discover new favourites"
          description="Follow highest rated shows and get personalized recommendations based on your watch history."
        />
        <AboutIcon
          source={Icon2.src}
          heading="Take Anisync anywhere"
          description="Keep track of your watchlist while travelling and enjoy add free high quality shows."
        />
        <AboutIcon
          source={Icon3.src}
          heading="Connect with people"
          description="Express your opinions in the comment section, meet new friends with similar interests and socialize."
        />
        <AboutIcon
          source={Icon4.src}
          heading="Rice it!"
          description="Customize your viewing experience with themes, custom leaderboards and more."
        />
      </div>
    </div>
  );
}
export default AboutIconsFeatures;
