import Image from "next/image"
import Picture from "../../assets/images/LoginPage/Subtract.png"
import Link from "next/link"

export default function Back() {
    return (
        <div>
            <Link href="/">
                <Image
                    src={Picture}
                    alt="back"
                    className="absolute top-10 right-20 rotate-180"
                />
            </Link>
        </div>

    )
}