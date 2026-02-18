import Image from "next/image";
import email from "@/app/assets/images/LoginPage/envelope-fill.png";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image 
      src={email} 
      alt="email" 
      className={className}
      priority
    />
  );
};

export default Logo;
