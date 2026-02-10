
import Box from "../components/LoginBox/box"
import Image from "next/image"
import Picture from "../assets/icons/img"


export default function LoginPage() {
    return (
        <div className="flex bg-black justify-center min-h-screen items-center  ">
            <div className="w-[1500px] h-[950px] flex justify-center items-center">
                <Picture />
                <Box />
            </div>
        </div>
    )
}