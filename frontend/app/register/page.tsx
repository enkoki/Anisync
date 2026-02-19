import RegisterPage from "../components/RegisterBox/box"
import Picture from "../components/RegisterBox/girl"
import Back from "../components/RegisterBox/backss"

export default function RegisterBox(){
    return(
       <div className="flex bg-black justify-center min-h-screen items-center">
            <div className="w-1600  h-237.5 flex justify-center items-center">
                <Picture>
                    <RegisterPage/>
                    <Back/>
                    
                </Picture>
            </div>
        </div>
    )
}