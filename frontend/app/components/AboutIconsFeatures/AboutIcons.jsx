function AboutIcon(props) {
  return (
    <div className="flex justify-center items-center w-[600px] gap-[32px] ">
      <div
        className="h-[150px] w-[150px] bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${props.source})` }}
      ></div>
      <div>
        <div className="text-[32px] font-black">{props.heading}</div>
        <div className="text-[24px] text-gray-400 w-[400px]">
          {props.description}
        </div>
      </div>
    </div>
  );
}
export default AboutIcon;
