import AboutGrid from "./AboutGrid.jsx";
function AboutFeatures() {
  return (
    <div className="flex flex-col w-screen justify-center items-center m-[12px]">
      <div className="text-[#B58FEA] font-bold text-6xl py-2">
        The next generation Anime Platform
      </div>
      <div className="text-[#4A4A4A] text-3xl font-bold">
        Track, share and discover your favourite anime
      </div>
      <div className="bg-linear-to-r from-[#6A00FF] to-[#B58FEA] bg-clip-text text-transparent text-[64px] font-black">
        Features
      </div>
      <AboutGrid />
    </div>
  );
}
export default AboutFeatures;
