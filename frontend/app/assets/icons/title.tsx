import title from "@/app/assets/images/HomePage/Title.svg"
import Image from "next/image"

const Picture = () => {
    return (
        <div>
            <Image
                src={title}
                alt="Title SVG"
                width={400}
                height={100}
                
            />
            
        </div>
    );
};

export default Picture;