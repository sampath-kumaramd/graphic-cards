import { Button } from "@/components/ui/button";

export default function Home() {
  const product={
    id: 1,
    image: 'https://ibb.co/jZpZHgR',
    brand: 'MSI',
    name: 'Nvidia RTX 4090 24GB',
    description: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver',
    price: 1024.99,
    discount: 35,
    deliveryTime: 1-2,
    isLastDrop: true,
    isLowestPrice: true,
  }
  return (
    <div className="max-w-screen-2xl mx-auto py-16"><Button>Click me</Button></div>
  );
}
