import Image from "next/image";
import pic from "@/app/assets/images/LoginPage/loginss.png";
import { ReactNode } from "react";



const Picture = () => {
    return (
        <div
            className="bg-cover bg-center relative rounded-tl-[85px] rounded-bl-[85px] bg-no-repeat w-[50%] h-full"
            style={{ backgroundImage: `url(${pic.src})` }}
        >
        </div>
    );
};

export default Picture;