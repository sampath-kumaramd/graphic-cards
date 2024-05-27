import Image from "next/image";
import React from "react";

import { MerkenItems, SeriesItems, WinkelsItems, AppItems, Item } from "@/bin/footer-items";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#363636] text-white">
      <div className="max-w-screen-2xl mx-auto flex py-12 h-auto justify-between items-start">
        <div className="flex items-center gap-5">
          <div className="flex justify-center w-16 h-16 bg-white rounded-xl p-2">
            <Image src="./icons/logo.svg" alt="logo" width={24} height={24} />
          </div>
          <div className="text-3xl font-bold">Grafischekaart.nl</div>
        </div>
        <div className="flex gap-48 text-semibold text-2xl">
          <div>
            <div className="pb-5">Merken</div>
            {MerkenItems.map((item: Item) => {
              const CategoryComponent = () => (
                <div key={item.id} className="py-1">
                  <Link href={item.href} className="text-lg font-light">{item.name}</Link>
                </div>
              );
              CategoryComponent.displayName = `CategoryComponent${item.id}`;
              return <CategoryComponent key={item.id} />;
            })}
          </div>
          <div>
          <div className="pb-5">Series</div>
            {SeriesItems.map((item: Item) => {
              const CategoryComponent = () => (
                <div key={item.id} className="py-1">
                  <Link href={item.href} className="text-lg font-light">{item.name}</Link>
                </div>
              );
              CategoryComponent.displayName = `CategoryComponent${item.id}`;
              return <CategoryComponent key={item.id} />;
            })}
          </div>
          <div>
          <div className="pb-5">Winkels</div>
            {WinkelsItems.map((item: Item) => {
              const CategoryComponent = () => (
                <div key={item.id} className="py-1">
                  <Link href={item.href} className="text-lg font-light">{item.name}</Link>
                </div>
              );
              CategoryComponent.displayName = `CategoryComponent${item.id}`;
              return <CategoryComponent key={item.id} />;
            })}
          </div>
          <div>
          <div className="pb-5">App</div>
            {AppItems.map((item: Item) => {
              const CategoryComponent = () => (
                <div key={item.id} className="py-1">
                  <Link href={item.href} className="text-lg font-light">{item.name}</Link>
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

export default Footer;
