import Image from "next/image";
import Logo from "@/assests/logoTransparente.png";
import Link from "next/link";
import { TbMovie } from "react-icons/tb";

export default function Header() {
  return (
    <header className="w-full mt-3 bg-transparent flex  justify-center ">
      <nav
        className="container  flex items-center justify-between 
      max-sm:justify-around
      "
      >
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo Primeflix"
            quality={100}
            priority={true}
            width={125}
            height={125}
            className="w-auto h-auto"
          />
        </Link>

        <button
          className="bg-red-600 rounded-xl w-18 flex justify-center items-center h-9  text-gray-100 text-md font-medium
       "
        >
          <TbMovie size={30} />
        </button>
      </nav>
    </header>
  );
}
