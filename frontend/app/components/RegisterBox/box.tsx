"use client"
import Person from '@/app/assets/icons/Person'
import Lock from '@/app/assets/icons/Lock'
import Logo from '@/app/assets/icons/email'


export default function RegisterPage(){
    return(
        <div className="flex w-[50%] flex-col items-center justify-center p-8 min-h-full bg-white rounded-tl-[85px] rounded-bl[85px] ">
                    <div className=" max-w">
                        <h2 className="mb-8 text-center text-4xl font-bold  text-[#6200ED]">REGISTER</h2>
                        
                            <div className='flex flex-col gap-5'>
                                <div className="flex items-center border-2 border-[#6200ED] rounded-[15px] overflow-hidden w-106 h-12.75 ">
                                    <div className="bg-[#6200ED] p-3 w-15.75 h-12.75">
                                        <Logo></Logo>
                                    </div>
                                    <input  type="text" className=" p-3 outline-none w-full placeholder-[#6200ED] text-xl text-black" placeholder="Email" />
                                </div>

                                <div className="flex items-center border-2 border-[#6200ED] rounded-[15px] overflow-hidden w-106 h-12.75 ">
                                    <div className="bg-[#6200ED] p-3">
                                        <Person></Person>
                                    </div>
                                    <input  type="text" className=" p-3 outline-none w-full placeholder-[#6200ED] text-xl text-black" placeholder="Username" />
                                </div>
                                <div className="flex items-center border-2 border-[#6200ED] rounded-[15px] overflow-hidden w-106 h-12.75 ">
                                    <div className="bg-[#6200ED] p-3">
                                        <Lock></Lock>
                                    </div>
                                    <input  type="password" className="p-3 outline-none w-full h-17.5  placeholder-[#6200ED] text-xl text-black" placeholder="Password" />
                                </div>
                            </div>
                    </div>
                    <button className="mt-8 rounded-[15px] bg-[#6200ED] py-4 text-xl font-bold text-white cursor-pointer h-14.75 w-130 " type="submit">Submit</button>
                </div >
    )
}