import pic from "@/app/assets/images/LoginPage/loginss.png";
interface PropsType {
    children: React.ReactNode
}
const Picture = ({ children }: PropsType) => {
    return (
        <div
            className="bg-cover bg-center relative bg-no-repeat w-[50%] h-full rounded-[85px]"
            style={{ backgroundImage: `url(${pic.src})` }}
        >
            {children}
        </div>
    );
};

export default Picture;