import ProductCard from "@/components/product-card";

import { Question, WhyGraphicCards } from "@/bin/questions";
import Image from "next/image";
import Link from "next/link";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { Button } from "@/components/ui/button";


import homePageCardImage from '../public/images/home-page-card.svg'
import doneIcon from '../public/icons/done-green.svg'
import { ProductCardShow } from "@/lib/enums/product-card-show";
import BlanckCard from "@/components/blanck-card";
import { Card, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";
import { products } from "@/bin/products";
import { brands } from "@/bin/brands";

export default function Home() {
  return (
    <div className="max-w-screen-2xl 2xl:mx-auto mx-8 py-12">
      {/* top frame */}

      <Card className=" border-none">
        <CardContent className="bg-[#28282d]  rounded-3xl pt-6">
          <div className="flex justify-between items-center ">
            <div className=" text-white">
              <div className=" lg:text-5xl text-3xl pl-12 p-4 font-bold ">
                Learn More <br />
                about <span className="italic">Commision</span> <br />
                <span className="italic">and Exposure</span>
              </div>
              <div className="lg:text-lg  text-base pl-12 lg:mb-12 mb-4">Subscribe to get exclusive deals, item recommendations,<br /> and shopping inspiration right into your inbox</div>
              <Link href="#" className="pl-12 font-bold text-lg">Read more →</Link>
            </div>
            <div className=" md:block hidden my-auto">
              <Image
                src={homePageCardImage}
                alt="home page card image"
                width={350}
                height={350}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between mt-32 mb-16">
        <div className=" font-bold text-3xl">Populaire merken</div>
        <Card>
          <CardContent className=" p-2 px-4 flex items-center">
            <div className=" flex justify-start gap-2 items-center">
              <Eye />
              <div className=" font-bold md:text-base text-sm">Alle merken bekijken</div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full 2xl:gap-24 xl:gap-8  items-center">
        {brands.map((brand) => (
          <ProductCard
            key={brand.id}
            image={brand.image}
            brand={brand.brand}
            showType={ProductCardShow.mini}
            className=" mb-8 mx-auto"
          />
        ))}
      </div>

      <div className=" flex gap-2 justify-start mt-12">
        <Image
          src={doneIcon}
          alt="home page card image"
          width={20}
          height={20}
        />
        <div>Laatste update vandaag 25/05/2024</div>
      </div>
      <div className="text-3xl  font-bold">Laatste dalingen</div>
      <div
        // className=" grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full 2xl:gap-24 xl:gap-8  items-center mt-8"
        className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full 2xl:gap-24 xl:gap-8  items-center mt-8"
      >
        {products.map((product, index) => (
          <>
            {index !== 5 && (
              <ProductCard
                key={product.id}
                image={product.image}
                brand={product.brand}
                name={product.name}
                size={product.size}
                description={product.description}
                price={product.price}
                discount={product.discount}
                deliveryTime={product.deliveryTime}
                isLastDrop={true}
                showType={ProductCardShow.full}
                className=" mb-8 mx-auto"
              />
            )}
            {index === 5 && (
              <BlanckCard key={product.id} />
            )}
          </>
        ))}
      </div>

      {/* questions related to why choose <brandName> ? */}
      <div className="space-y-20 mb-20">
        {WhyGraphicCards.map((item: Question) => {
          const CategoryComponent = () => (
            <div key={item.id}>
              <div className="text-3xl font-bold mb-3">
                Waarom kiezen voor een {item.graphicCard} grafische kaart?
              </div>
              <div className="text-lg text-[#828282] font-medium">
                {item.answer}
              </div>
            </div>
          );
          CategoryComponent.displayName = `CategoryComponent${item.id}`;
          return <CategoryComponent key={item.id} />;
        })}
      </div>
    </div>
  );
}


{/* <ProductCard
        id={product.id}
        image={product.image}
        brand={product.brand}
        name={product.name}
        size={product.size}
        description={product.description}
        price={product.price}
        discount={product.discount}
        deliveryTime={product.deliveryTime}
        isLastDrop={product.isLastDrop}
        isLowestPrice={product.isLowestPrice}
        isFavorite={product.isFavorite}
        showType={ProductCardShow.full}
      /> */}