import Link from "next/link";

export default function Buttons() {
    return (
        <>
            <div>
                <button className="bg-black text-white border-4 border-[#6200ED] shadow-lg cursor-pointer px-4 py-2 rounded-2xl mt-6 font-black">
                    <Link href="/profile"> Start Tracking</Link>
                </button>
            </div>
        </>
    )


}
