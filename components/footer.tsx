import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import logo from '../public/icons/logo.svg'
import { MerkenItems, SeriesItems, WinkelsItems, AppItems, Item } from "@/bin/footer-items";

function Footer() {
  return (
    <div className="bg-[#363636] text-white">
      <div className="max-w-screen-2xl 2xl:mx-auto mx-8 flex py-12 h-auto justify-between items-start">
        <div className="flex items-center gap-5">
          <div className="flex justify-center w-16 h-16 bg-white rounded-xl p-2">
            <Image src={logo.src} alt="logo" width={24} height={24} />
          </div>
          <div className="text-3xl font-bold">Grafischekaart.nl</div>
        </div>
        <div className="hidden xl:flex 2xl:gap-48 xl:gap-24 text-semibold text-2xl">
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
      <div className="flex xl:hidden">
      <Accordion type="single" collapsible className="w-10/12 mx-auto mb-16">
        <AccordionItem value="item-1">
          <AccordionTrigger>Merken</AccordionTrigger>
          <AccordionContent>
            {MerkenItems.map((item: Item) => {
              const CategoryComponent = () => (
                <div key={item.id} className="py-1">
                  <Link href={item.href} className="text-lg font-light">{item.name}</Link>
                </div>
              );
              CategoryComponent.displayName = `CategoryComponent${item.id}`;
              return <CategoryComponent key={item.id} />;
            })}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Series</AccordionTrigger>
          <AccordionContent>
            {SeriesItems.map((item: Item) => {
              const CategoryComponent = () => (
                <div key={item.id} className="py-1">
                  <Link href={item.href} className="text-lg font-light">{item.name}</Link>
                </div>
              );
              CategoryComponent.displayName = `CategoryComponent${item.id}`;
              return <CategoryComponent key={item.id} />;
            })}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Winkels</AccordionTrigger>
          <AccordionContent>
            {WinkelsItems.map((item: Item) => {
              const CategoryComponent = () => (
                <div key={item.id} className="py-1">
                  <Link href={item.href} className="text-lg font-light">{item.name}</Link>
                </div>
              );
              CategoryComponent.displayName = `CategoryComponent${item.id}`;
              return <CategoryComponent key={item.id} />;
            })}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>App</AccordionTrigger>
          <AccordionContent>
            {AppItems.map((item: Item) => {
              const CategoryComponent = () => (
                <div key={item.id} className="py-1">
                  <Link href={item.href} className="text-lg font-light">{item.name}</Link>
                </div>
              );
              CategoryComponent.displayName = `CategoryComponent${item.id}`;
              return <CategoryComponent key={item.id} />;
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </div>
    </div>
  );
}

export default Footer;
