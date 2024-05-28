import React from "react";
import Image from "next/image";
import Link from "next/link";

import truckGreen from "@/public/icons/truck-green.svg";
import FacebookIcon from '@/public/icons/facebook.svg';
import TwitterIcon from '@/public/icons/twitter.svg';
import TelegramIcon from '@/public/icons/telegram.svg';
import RedditIcon from '@/public/icons/radditis.svg';
import PinterestIcon from '@/public/icons/pinterest.svg';
import InstagramIcon from '@/public/icons/instragram.svg';
import SmileFace from '@/public/icons/smileFace.svg';


import { NederlandItems, Duitsland, ProductInformation, Topic, Item } from "@/bin/product-page";
import { Card } from "@/components/ui/card";

export default function ProductPage() {
  return (
    <div className="max-w-screen-2xl 2xl:mx-auto mx-8 py-16 space-y-28">
      {/* 1 */}
      <div className="space-y-10">
        <div className="text-4xl font-bold">
          MSI GeForce RTX 4070 Ti VENTUS 3X E1 12G OC
        </div>
        <div className="xl:flex w-full xl:space-x-20 ">
          <Card className="xl:w-1/3 w-full h-96 rounded-3xl flex justify-center">
            <Image
              src="/images/MSI-GeForce-RTX-4070.png"
              alt="MSI-GeForce-RTX-4070"
              width={400}
              height={400}
            />
          </Card>
          <div className="xl:w-2/3 w-full py-6 space-y-6">
            <div className="text-2xl font-bold">
              MSI GeForce RTX 4070 Ti VENTUS 3X E1 12G OC
            </div>
            <div className="text-xl text-gray-400 font-base leading-normal">
              MSI, een toonaangevend merk in de wereld van gaming en
              computerhardware, staat bekend om zijn hoogwaardige grafische
              kaarten. Deze kaarten, ontworpen voor zowel gamers als
              professionals, bieden uitstekende prestaties en betrouwbaarheid.
              MSI&apos;s grafische kaarten zijn uitgerust met geavanceerde
              koelsystemen, zoals de Twin Frozr-serie, die zorgen voor
              efficiënte warmteafvoer en stille werking. Met innovatieve
              functies zoals RGB-verlichting, overklokmogelijkheden en robuuste
              bouwkwaliteit, leveren MSI grafische kaarten een optimale
              gamingervaring. Daarnaast ondersteunt MSI regelmatig hun producten
              met software-updates en gebruikersvriendelijke tools, wat
              bijdraagt aan hun reputatie als betrouwbare keuze voor
              pc-enthousiastelingen wereldwijd.
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="xl:flex w-full 2xl:space-x-20 space-x-4">
        <div className="xl:w-1/3 w-full space-y-10">
          <div className=" xl:space-y-10 sm:flex xl:block sm:space-x-10 space-y-10 sm:space-y-0 xl:space-x-0 "> 

          <div className="h-auto border border-gray-300 rounded-3xl p-5 space-y-5 text-[#3C3C43] ">
            <div className="flex 2xl:space-x-6 space-x-2">
              <Image
                src={SmileFace}
                alt="smileFace"
                width={30}
                height={30}
              />
              <span className="text-2xl font-medium ">Laagste prijs</span>
            </div>
            <div className="text-5xl font-bold">€ 614,-</div>
          </div>

          <div className="h-auto border border-gray-300 rounded-3xl p-5 space-y-5 text-[#3C3C43] ">
            <div className="flex  2xl:space-x-6 space-x-2 ">
              <Image
                src={SmileFace}
                alt="smileFace"
                width={30}
                height={30}
              />
              <span className="text-2xl font-medium ">Release prijs</span>
            </div>
            <div className="text-5xl font-bold">€ 1200,-</div>
          </div>
          </div>
          <div className="h-auto border border-gray-300 rounded-3xl p-5 space-y-5 text-[#3C3C43] ">
            <div className="font-bold text-2xl text-center xl:text-left">Deel deze pagina</div>
            <div className="text-xl text-center xl:text-left">
              Wist je dat Site.com ook actief is op Social <br /> media?
              GHieronder vind je een link naar onze <br /> kanelen. Volg voor
              meer informatie.
            </div>
            <div className="flex  2xl:space-x-5 space-x-2 items-center w-full justify-center xl:justify-start">
              <Link href="#">
                <Image
                  src={FacebookIcon}
                  alt="facebook"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#">
                <Image
                  src={TwitterIcon}
                  alt="twitter"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#">
                <Image
                  src={TelegramIcon}
                  alt="telegram"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#">
                <Image
                  src={RedditIcon}
                  alt="reddit"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#">
                <Image
                  src={PinterestIcon}
                  alt="pinterest"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="#">
                <Image
                  src={InstagramIcon}
                  alt="instagram"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="xl:w-2/3 w-full mt-16 xl:mt-0">
          <div className="space-y-16">
            <div>
              <div className="flex space-x-2">
                <span className="text-3xl text-[#363636] font-semibold mb-5">
                  Gevonden bij 4 aanbieders in Nederland
                </span>
                <span>
                  <Image
                    src="/images/NLflag.jpg"
                    alt="facebook"
                    width={40}
                    height={40}
                  />
                </span>
              </div>
              <div className="w-full space-y-5">
                {NederlandItems.map((item: Item) => {
                  const CategoryComponent = () => (
                    <div
                      key={item.id}
                      className="rounded-2xl items-center w-full border border-gray-300 bg-white drop-shadow-md  md:grid md:grid-cols-12 pb-8 md:pb-0"
                    >
                      <div className="col-start-1 col-span-9 border-r-2">
                        <div className="md:grid md:grid-cols-5 w-full 2xl:mx-8 mx-4 items-center">
                          <div className="col-span-1">
                            <Image
                              src={item.logo}
                              alt="facebook"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="col-span-1 xl:text-3xl text-2xl font-boldmd:justify-center justify-start flex">
                            {item.price}
                          </div>
                          <div className="col-span-3 flex space-x-3 justify-start 2xl:ml-6 md:ml-2 items-center">
                            <Image
                              src={truckGreen.src}
                              alt="truck-green"
                              width={30}
                              height={30}
                            />
                            <span className="font-medium text-lg">
                              {item.description}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-start-10 col-span-3 mx-6 mt-4 md:mt-0">
                        <div className="text-center text-xl py-1 border-2 border-green-600 rounded-full 2xl:w-48 w-32 text-semibold text-[#16AE65]">
                          <button>Bekijken</button>
                        </div>
                      </div>
                    </div>
                  );
                  CategoryComponent.displayName = `CategoryComponent${item.id}`;
                  return <CategoryComponent key={item.id} />;
                })}
              </div>
            </div>

            <div>
              <div className="flex space-x-2">
                <span className="text-3xl text-[#363636] font-semibold mb-5">
                  Gevonden bij 3 aanbieders in Duitsland
                </span>
                <span>
                  <Image
                    src="/images/Germanflag.jpg"
                    alt="facebook"
                    width={40}
                    height={40}
                  />
                </span>
              </div>
              <div className="w-full space-y-5">
                {Duitsland.map((item: Item) => {
                  const CategoryComponent = () => (
                    <div
                      key={item.id}
                      className="rounded-2xl items-center w-full border border-gray-300 bg-white drop-shadow-md md:grid md:grid-cols-12 pb-8 md:pb-0"
                    >
                      <div className="col-start-1 col-span-9 border-r-2">
                        <div className="md:grid md:grid-cols-5 w-full mx-8 items-center">
                          <div className="col-span-1">
                            <Image
                              src={item.logo}
                              alt="facebook"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="col-span-1 xl:text-3xl text-2xl font-bold md:justify-center justify-start flex">
                            {item.price}
                          </div>
                          <div className="col-span-3 flex space-x-3 justify-start 2xl:ml-6 md:ml-2  items-center">
                            <Image
                              src={truckGreen.src}
                              alt="truck-green"
                              width={30}
                              height={30}
                            />
                            <span className="font-medium text-lg">
                              {item.description}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-start-10 col-span-3 mx-6 mt-4 md:mt-0">
                        <div className="text-center text-xl py-1 border-2 border-green-600 rounded-full 2xl:w-48 w-32 text-semibold text-[#16AE65]">
                          <button>Bekijken</button>
                        </div>
                      </div>
                    </div>
                  );
                  CategoryComponent.displayName = `CategoryComponent${item.id}`;
                  return <CategoryComponent key={item.id} />;
                })}
              </div>
            </div>
          </div>

          {/* production releted questions */}
          <div className="space-y-12 pt-16">
            {ProductInformation.map((item: Topic) => {
              const CategoryComponent = () => (
                <div key={item.id}>
                  <div className="text-3xl font-bold mb-3">
                    {item.topic}
                  </div>
                  <div className="text-lg text-[#828282] font-medium">
                    {item.description}
                  </div>
                </div>
              );
              CategoryComponent.displayName = `CategoryComponent${item.id}`;
              return <CategoryComponent key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}