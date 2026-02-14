import hero from "@/app/assets/images/HomePage/website_hero.png"

interface PropsType {
    children: React.ReactNode
}

export default function HomeBody({ children }: PropsType) {
    return (
        <div
            className="w-screen h-screen bg-cover bg-center bg-no-repeat flex justify-center items-start flex-col px-25"
            style={{ backgroundImage: `url(${hero.src})` }}
        >
            {children}
        </div>
    )
}
