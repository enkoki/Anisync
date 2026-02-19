import Box from "../components/LoginBox/box"
import Picture from "../assets/icons/img"
import Back from "../assets/icons/back"

export default function LoginPage() {
    return (
        <div className="flex bg-black justify-center min-h-screen items-center  ">
            <div className="flex justify-center items-center">
                <Picture>
                    <Back />
                    <Box />
                </Picture>
            </div>
        </div>
    )
}