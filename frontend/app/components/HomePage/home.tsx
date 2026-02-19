import hero from "@/app/assets/images/HomePage/website_hero.png"
import mobilehero from "@/app/assets/images/HomePage/HeroPhone.svg"
interface PropsType {
    children: React.ReactNode
}

export default function HomeBody({ children }: PropsType) {
    return (
        <div
            className="w-screen h-screen flex justify-center items-center lg:items-start flex-col px-25 z-2300 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${mobilehero.src})`,
            }}
        >
            <div className="hidden lg:block absolute inset-0 bg-cover bg-center" 
                 style={{ backgroundImage: `url(${hero.src})` }}></div>
            {children}
        </div>
    )
}

