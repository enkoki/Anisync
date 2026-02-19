import pic from "@/app/assets/images/LoginPage/loginss.webp";
interface PropsType {
    children: React.ReactNode
}
const Picture = ({ children }: PropsType) => {
    return (
        <div
            className="bg-cover bg-center relative rounded-[85px] bg-no-repeat w-250 h-screen lg:h-200 2xl:w-375 2xl:h-237.5 flex justify-end items-center"
            style={{ backgroundImage: `url(${pic.src})` }}
        >
            {children}
        </div>
    );
};

export default Picture;