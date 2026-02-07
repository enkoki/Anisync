import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  const isLoggedIn = false; // toggle this value to switch from logged out to log in and vice versa
  return (
    <>
      <Navbar isloggedin={isLoggedIn}/>
    </>
  );
}
