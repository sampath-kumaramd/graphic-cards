import React from 'react'

import ProductCard from '@/components/product-card'
import { ProductCardShow } from '@/lib/enums/product-card-show'

import { brands } from '@/bin/band-page'

export default function PopularBrandPage() {
  return (
    <div className="max-w-screen-2xl 2xl:mx-auto mx-8 py-12 min-h-screen">
      <div className=" font-bold text-3xl">Populaire merken </div>
      <div className=' flex justify-start mt-4'>
        MSI, een toonaangevend merk in de wereld van gaming en computerhardware,
        staat bekend om zijn hoogwaardige grafische kaarten. Deze kaarten, ontworpen
        voor zowel gamers als professionals, bieden uitstekende prestaties en betrouwbaarheid.
        MSI&apos;s grafische kaarten zijn uitgerust met geavanceerde koelsystemen, zoals de Twin Frozr-serie,
        die zorgen voor efficiënte warmteafvoer en stille werking. Met innovatieve functies zoals RGB-verlichting,
        overklokmogelijkheden en robuuste bouwkwaliteit, leveren MSI grafische kaarten een optimale gamingervaring.
        Daarnaast ondersteunt MSI regelmatig hun producten met software-updates en gebruikersvriendelijke tools,
        wat bijdraagt aan hun reputatie als betrouwbare keuze voor pc-enthousiastelingen wereldwijd.
      </div>
      <div className=" grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full 2xl:gap-4 xl:gap-8  items-center mt-8">
        {brands.map((brand) => (
          <ProductCard
            id={brand.id}
            key={brand.id}
            image={brand.image}
            brand={brand.brand}
            showType={ProductCardShow.mini}
            className=" mb-8 mx-auto"
          />
        ))}
      </div>
      <div className="my-20">
        <div>
          <div className="text-3xl font-bold mb-3">
            Waarom kiezen voor een {'BRAND'}  grafische kaart?
          </div>
          <div className="text-xl text-black font-bold mt-8 ml-4">{'BRAND'} Grafische kaarten</div>
          <div className="text-lg text-[#828282] font-medium mt-4 ml-4 ">
            MSI, een toonaangevend merk in de wereld van gaming en computerhardware, staat bekend om zijn hoogwaardige
            grafische kaarten. Deze kaarten, ontworpen voor zowel gamers als professionals, bieden uitstekende prestaties
            en betrouwbaarheid. MSI&apos;s grafische kaarten zijn uitgerust met geavanceerde koelsystemen, zoals de Twin Frozr-serie,
            die zorgen voor efficiënte warmteafvoer en stille werking. Met innovatieve functies zoals RGB-verlichting, overklokmogelijkheden
            en robuuste bouwkwaliteit, leveren MSI grafische kaarten een optimale gamingervaring. Daarnaast ondersteunt MSI regelmatig hun
            producten met software-updates en gebruikersvriendelijke tools, wat bijdraagt aan hun reputatie als betrouwbare keuze voor
            pc-enthousiastelingen wereldwijd.
          </div>
        </div>
      </div>
    </div>
  )
}