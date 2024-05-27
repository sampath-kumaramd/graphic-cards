"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "./ui/separator";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <Image src="./icons/logo.svg" alt="logo" width={20} height={20} />
          <div className="font-bold text-2xl">Grafischekaart.nl</div>
        </div>
        <div className="flex gap-12 font-semibold text-gray-600 text-lg">
          <Link href="#">Home</Link>
          <Link href="#">Grafische kaarten</Link>
          <Link href="#">Series</Link>
          <Link href="#">Winkels</Link>
          <Link href="#">Merken</Link>
        </div>
        <div className="">
          <div className="flex border border-gray-400 rounded-full w-full h-auto py-2 px-3 items-center gap-3">
            <Image src="./icons/search.svg" alt="logo" width={15} height={15} />
            <input
              placeholder="Zoeken naar grafische kaarten"
              className="focus:outline-none mr-10"
            />
          </div>
        </div>
      </div>
      <Separator />
    </nav>
  );
};

export default Header;
