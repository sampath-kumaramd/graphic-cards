import { Card, CardContent } from "@/components/ui/card";
import MSIBrand from "../../../public/MSI-Brand.svg";
import Image from "next/image";
import ProductCard from "@/components/product-card";
import { ProductCardShow } from "@/lib/enums/product-card-show";
import { products } from "@/bin/band-page";

export default function BrandPage() {
    return (
        <div className="max-w-screen-2xl 2xl:mx-auto mx-8 py-12 min-h-screen">
            <div className=" font-bold text-3xl">{'BRAND'} grafische kaarten  </div>

            <div className='xl:grid justify-between xl:grid-cols-12 gap-8 mt-8 xl:mb-16 mb-24 xl:h-60 flex flex-col' >
                <div className="col-span-3 h-full">
                    <Card className="rounded-3xl h-full">
                        <CardContent className="flex justify-center items-center h-full ">
                            <Image src={MSIBrand} alt='favicon' width={250} height={250} />
                        </CardContent>
                    </Card>
                </div>
                <div className='col-span-9 h-full'>
                    <Card className="rounded-3xl h-full">
                        <CardContent className="flex justify-start items-start flex-col h-full">
                            <div className="mt-8 font-bold text-xl">{'BRAND'} Grafische kaarten</div>
                            <div>MSI, een toonaangevend merk in de wereld van gaming en computerhardware,
                                staat bekend om zijn hoogwaardige grafische kaarten. Deze kaarten, ontworpen
                                voor zowel gamers als professionals, bieden uitstekende prestaties en betrouwbaarheid.
                                MSI&apos;s grafische kaarten zijn uitgerust met geavanceerde koelsystemen, zoals de Twin
                                Frozr-serie, die zorgen voor efficiënte warmteafvoer en stille werking. Met innovatieve
                                functies zoals RGB-verlichting, overklokmogelijkheden en robuuste bouwkwaliteit, leveren
                                MSI grafische kaarten een optimale gamingervaring. Daarnaast ondersteunt MSI regelmatig hun
                                producten met software-updates en gebruikersvriendelijke tools, wat bijdraagt aan hun reputatie
                                als betrouwbare keuze voor pc-enthousiastelingen wereldwijd.</div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div>
                <div className=" font-bold text-3xl">Wij hebben {'COUNT'} {'BRAND'} grafische kaarten gevonden</div>
                <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full 2xl:gap-24 xl:gap-8  items-center mt-8">
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            brand={product.brand}
                            name={product.name}
                            size={product.size}
                            description={product.description}
                            price={product.price}
                            discount={product.discount}
                            deliveryTime={product.deliveryTime}
                            isLastDrop={true}
                            showType={ProductCardShow.compare}
                            className=" mb-8 mx-auto"
                        />
                    ))}
                </div>
            </div>

            <div className="my-20">
                <div>
                    <div className="text-3xl font-bold mb-3">
                        Waarom kiezen voor een {'BRAND'} grafische kaart?
                    </div>
                    <div className="text-lg text-[#828282] font-medium mt-4 ">
                        MSI, een toonaangevend merk in de wereld van gaming en computerhardware,
                        staat bekend om zijn hoogwaardige grafische kaarten. Deze kaarten, ontworpen
                        voor zowel gamers als professionals, bieden uitstekende prestaties en betrouwbaarheid.
                        MSI &apos;s grafische kaarten zijn uitgerust met geavanceerde koelsystemen, zoals de Twin
                        Frozr-serie, die zorgen voor efficiënte warmteafvoer en stille werking. Met innovatieve
                        functies zoals RGB-verlichting, overklokmogelijkheden en robuuste bouwkwaliteit, leveren MSI
                        grafische kaarten een optimale gamingervaring. Daarnaast ondersteunt MSI regelmatig hun producten
                        met software-updates en gebruikersvriendelijke tools, wat bijdraagt aan hun reputatie als betrouwbare
                        keuze voor pc-enthousiastelingen wereldwijd.


                    </div>
                </div>
            </div>

        </div>
    )

}


