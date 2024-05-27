import { Question, WhyGraphicCards } from "@/bin/questions";
import Image from "next/image";
import Link from "next/link";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto py-12">
      {/* top frame */}
      <div className="pb-24 relative">
        <Image
          src="/images/frame.png"
          alt="frame"
          width={1950}
          height={10}
          className="absolute"
        />
        <div className="relative text-white">
          <div className=" text-5xl p-12 font-bold ">
            Learn More <br />
            about <span className="italic">Commision</span> <br />
            <span className="italic">and Exposure</span>
          </div>
          <div className="text-lg pl-12 mb-24">Subscribe to get exclusive deals, item recommendations,<br/> and shopping inspiration right into your inbox</div>
          <Link href="#" className="pl-12 font-bold text-lg">Read more →</Link>
        </div>
      </div>

      {/* questions related to why choose <brandName> ? */}
      <div className="space-y-12">
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
