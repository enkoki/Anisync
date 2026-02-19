import title from "@/app/assets/images/HomePage/Title.svg"
import Image from "next/image"

const Picture = () => {
    return (
        <div className="z-20">
            <Image src={title} alt="Title SVG" width={400 }height={100}/>
        </div>
    );
};

export default Picture;