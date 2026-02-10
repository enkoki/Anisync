import pfp from '@/app/assets/images/LoginPage/person-fill.png'
import pfp1 from '@/app/assets/images/LoginPage/lock-fill.png'
import Image from 'next/image'
import Person from '@/app/assets/icons/Person'
import Lock from '@/app/assets/icons/Lock'

export default function LoginContainer() {
    return (
        <div className="flex w-[50%] flex-col items-center justify-center p-8 min-h-full bg-white rounded-tr-[85px] rounded-br-[85px]">
            <div className=" max-w">
                <h2 className="mb-8 text-center text-4xl font-bold  text-[#6200ED]">LOG IN</h2> {/*[#6200ED]*/}

                <form >
                    <div className='flex flex-col gap-5'> {/*gap-4 */}
                        <div className="flex items-center border-2 border-[#6200ED] rounded-[15px] overflow-hidden w-[424px] h-[51px] ">
                            <div className="bg-[#6200ED] p-3">
                                <Person></Person>
                            </div>
                            <input type="text" className=" p-3 outline-none w-full placeholder-[#6200ED] text-xl text-black" placeholder="Username" />
                        </div>


                        <div className="flex items-center border-2 border-[#6200ED] rounded-[15px] overflow-hidden w-[424px] h-[51px] ">
                            <div className="bg-[#6200ED] p-3">
                                {/* <Image src={pfp1} className="h-6 w-6" alt="lock"></Image> */}
                                <Lock></Lock>
                            </div>
                            <input type="password" className="p-3 outline-none w-full h-17.5  placeholder-[#6200ED] text-xl text-black" placeholder="Password" />
                        </div>
                    </div>

                    <p className="text-center text-sm text-black text-bold p-4">
                        Don't have an account?
                        <span className="text-[#6200ED] font-bold cursor-pointer ml-1">
                            Register here
                        </span>
                    </p>
                </form>
            </div>

            <button className="rounded-[15px] bg-[#6200ED] py-4 text-xl font-bold text-white cursor-pointer h-[59px] w-[520px]">
                Log In
            </button>
        </div >
    )
}