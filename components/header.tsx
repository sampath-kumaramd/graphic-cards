"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "./ui/separator";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-screen-2xl 2xl:mx-auto  mx-8 flex items-center justify-between py-5">
        <div className="flex items-center gap-3">
          <Image src="./icons/logo.svg" alt="logo" width={20} height={20} />
          <div className="font-bold text-2xl">Grafischekaart.nl</div>
        </div>
        <div className="hidden xl:flex 2xl:gap-12  gap-8 font-semibold text-gray-600 text-lg">
          <Link href="#">Home</Link>
          <Link href="#">Grafische kaarten</Link>
          <Link href="#">Series</Link>
          <Link href="#">Winkels</Link>
          <Link href="#">Merken</Link>
        </div>
        <div >
          <div className="hidden xl:flex border border-gray-400 rounded-full w-full h-auto py-2 px-3 items-center gap-3">
            <Image src="./icons/search.svg" alt="logo" width={15} height={15} />
            <input
              placeholder="Zoeken naar grafische kaarten"
              className="focus:outline-none mr-10"
            />
          </div>
          <div className="flex xl:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline"><Menu /></Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-3">
                      <Image src="./icons/logo.svg" alt="logo" width={20} height={20} />
                      <div className="font-bold text-xl">Grafischekaart.nl</div>
                    </div>

                  </SheetTitle>
                  <SheetDescription>
                    <div className="flex border border-gray-400 rounded-full w-full h-auto py-2 px-3 items-center gap-3 mt-8">
                      <Image src="./icons/search.svg" alt="logo" width={15} height={15} />
                      <input
                        placeholder="Zoeken naar grafische kaarten"
                        className="focus:outline-none mr-10"
                      />
                    </div>
                  </SheetDescription>
                </SheetHeader>
                <div className="font-semibold text-gray-600 text-lg flex flex-col space-y-3 mt-8">
                  <Link href="#">Home</Link>
                  <Link href="#">Grafische kaarten</Link>
                  <Link href="#">Series</Link>
                  <Link href="#">Winkels</Link>
                  <Link href="#">Merken</Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <Separator />
    </nav>
  );
};

export default Header;
