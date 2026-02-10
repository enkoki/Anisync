import Image from "next/image";
import pic from "@/app/assets/images/LoginPage/loginss.png"


const picture = () => {
    return (
        <div className='flex justify-center items-center gap-5'>
            <p className='font-bold text-[18px]'>Enko</p>
            <Image src={pic} alt="user profile picture" className='rounded-full w-10 h-10'></Image>
        </div>
    )
}

export default picture