import Navbar from "./components/Navbar/Navbar"
import HomeBody from "./components/HomePage/home";
import Picture from "./assets/icons/title";
import Buttons from "./assets/icons/homebutton";


export default function Home() {
  const isLoggedIn = false; // toggle this value to switch from logged out to log in and vice versa
  return (
    <>
      <Navbar isloggedin={isLoggedIn} />
      <div className="relative w-screen h-screen">
        <HomeBody >
          <Picture />
          <div>
            <h4 className=" text-[18px] text-[#4A4A4A] font-black">
              Start Tracking your watch list from today
            </h4>
            <Buttons />
          </div>
        </HomeBody>

      </div>
    </>
  );
}
