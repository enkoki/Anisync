function AboutGrid() {
  return (
    <div className="grid grid-col-5 grid-row-2 h-200 w-400 gap-2 m-[4px]">
      <div className="bg-linear-to-r from-[#2E036B] to-[#6200ED] row-start-1 row-end-3 col-span-1 rounded-[20px]"></div>
      <div className="bg-[#2E036B] row-span-1 col-start-2 col-end-4 rounded-[20px]"></div>
      <div className="bg-[#2E036B] row-span-1 col-start-4 col-end-5 rounded-[20px]"></div>
      <div className="bg-linear-to-r from-[#2E036B] to-[#6200ED] row-span-1 col-start-2 col-end-5 rounded-[20px] p-[10px]">
        <div className="bg-[#2E036B] w-full h-full rounded-[16px]"></div>
      </div>
    </div>
  );
}
export default AboutGrid;
