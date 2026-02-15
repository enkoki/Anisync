function AboutIcon({ source }) {
  return (
    <div
      className="h-[200px] w-[200px] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${source})` }}
    ></div>
  );
}
export default AboutIcon;
