import pfp from '@/app/assets/images/LoginPage/person-fill.png'
import pfp1 from '@/app/assets/images/LoginPage/lock-fill.png'
import Image from 'next/image'

export default function LoginContainer() {
    return (
        <div className="flex w-full flex-col items-center justify-center p-8 min-h-screen bg-white">
            <div className=" max-w">
                <h2 className="mb-8 text-center text-4xl font-bold text-[#6200ED]">LOG IN</h2>

                <form >
                    <div className='flex flex-col gap-4'> {/*gap-4 */}
                        <div className="flex items-center border-2 border-[#6200ED] rounded-[15px] overflow-hidden ">
                            <div className="bg-[#6200ED] p-3">
                                <Image src={pfp} className="h-6 w-6 invert" alt="user"></Image>
                            </div>
                            <input type="text" className=" p-3 outline-none w-full" placeholder="Username" />
                        </div>


                        <div className="flex items-center border-2 border-[#6200ED] rounded-[15px] overflow-hidden ">
                            <div className="bg-[#6200ED] p-3">
                                <Image src={pfp1} className="h-6 w-6 invert" alt="lock"></Image>
                            </div>
                            <input type="password" className="p-3 outline-none w-full" placeholder="Password" />
                        </div>
                    </div>

                    <p className="text-center text-sm text-black-900">
                        Don't have an account?
                        <span className="text-[#6200ED] font-bold cursor-pointer ml-1">
                            Register here
                        </span>
                    </p>

                    <button className="w-full rounded-[15px] bg-[#6200ED] py-4 text-xl font-bold text-white cursor-pointer">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    )
}