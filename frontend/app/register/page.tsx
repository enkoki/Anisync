import RegisterPage from "../components/RegisterBox/box"

export default function RegisterBox(){
    return(
       <div className="flex bg-black justify-center min-h-screen items-center">
            <div className="w-375 h-237.5 flex justify-center items-center">
                <RegisterPage/>
            </div>
        </div>
    )
}