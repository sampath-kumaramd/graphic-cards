import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import image from '../public/RTX.svg'
import { ProductCardShow } from "@/lib/enums/product-card-show";
import BlanckCard from "@/components/blanck-card";

export default function Home() {
  const product = {
    id: 1,
    image: image.src,
    brand: 'MSI',
    name: 'Nvidia RTX 4090',
    size: '24GB',
    description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver',
    price: 1024.99,
    discount: 35,
    deliveryTime: "1 - 2",
    isLastDrop: true,
    isLowestPrice: true,
    isFavorite : true
  }
  return (
    <div className="max-w-screen-2xl mx-auto py-16">
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
      <BlanckCard />
    </div>
  );
}
