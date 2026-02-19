import Link from "next/link";

export default function Buttons() {
    return (
        <>
            <div>
                <button className="text-white border-4 border-[#6200ED] bg-[#6200ED] lg:bg-black shadow-lg cursor-pointer text-[15px] sm:text-xl px-2 sm:px-4 py-1 sm:py-2 rounded-2xl font-black">
                    <Link href="/profile"> Start Tracking</Link>
                </button>
            </div>
        </>
    )


}
