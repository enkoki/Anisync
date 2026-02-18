import RegisterPage from "../components/RegisterBox/box"
import Picture from "../assets/icons/img"

export default function RegisterBox(){
    return(
       <div className="flex bg-black justify-center min-h-screen items-center">
            <div className="w-375 h-237.5 flex justify-center items-center">
                <Picture>
                    <RegisterPage/>
                </Picture>
            </div>
        </div>
    )
}