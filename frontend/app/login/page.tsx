
import Box from "../components/LoginBox/box"
import Picture from "../assets/icons/img"
import Arrow from "../assets/icons/arrow"


export default function LoginPage() {
    return (
        <div className="flex bg-black justify-center min-h-screen items-center  ">
            <div className="w-375 h-237.5 flex justify-center items-center">
                <Picture />
                <Box />
            </div>
        </div>
    )
}