
export type Item = {
    id: number;
    logo: string;
    price: string;
    description: string;
}

export type Topic = {
    id: number;
    topic: string;
    description: string;
};

import bol from "../public/images/bol.png"
import amazon from "../public/images/amazon.png"
import megekko from "../public/images/megekko.png"
import maxICT from "../public/images/maxICT.png"

import NBB from "../public/images/NBB.png"
import caseKing from "../public/images/caseKing.png"
import mindFactory from "../public/images/mindFactory.png"



export const NederlandItems: Item[] = [
    {
        id: 1,
        logo: bol.src,
        price: "€ 614,-",
        description: "Binnen 1 tot 2 werkdagen in huis"
    },
    {
        id:2,
        logo: amazon.src,
        price: "€ 712,-",
        description: "Vandaag besteld = morgen in huis"
    },
    {
        id: 3,
        logo: megekko.src,
        price: "€ 912,-",
        description: "Binnen 2 weken in huis"
    },
    {
        id:4,
        logo: maxICT.src,
        price: "€ 912,-",
        description: "Vandaag besteld = morgen in huis"
    }
]

export const Duitsland: Item[] = [
    {
        id: 1,
        logo: NBB.src,
        price: "€ 614,-",
        description: "Binnen 1 tot 2 werkdagen in huis"
    },
    {
        id:2,
        logo: caseKing.src,
        price: "€ 712,-",
        description: "Vandaag besteld = morgen in huis"
    },
    {
        id: 3,
        logo: mindFactory.src,
        price: "€ 912,-",
        description: "Binnen 2 weken in huis"
    }
]

export const ProductInformation : Topic [] = [
    {
        id: 1,
        topic: 'MSI GeForce RTX 4070 Ti VENTUS 3X E1 12G OC',
        description: 'MSI, een toonaangevend merk in de wereld van gaming en computerhardware, staat bekend om zijn hoogwaardige grafische kaarten. Deze kaarten, ontworpen voor zowel gamers als professionals, bieden uitstekende prestaties en betrouwbaarheid. MSI\'s grafische kaarten zijn uitgerust met geavanceerde koelsystemen, zoals de Twin Frozr-serie, die zorgen voor efficiënte warmteafvoer en stille werking. Met innovatieve functies zoals RGB-verlichting, overklokmogelijkheden en robuuste bouwkwaliteit, leveren MSI grafische kaarten een optimale gamingervaring. Daarnaast ondersteunt MSI regelmatig hun producten met software-updates en gebruikersvriendelijke tools, wat bijdraagt aan hun reputatie als betrouwbare keuze voor pc-enthousiastelingen wereldwijd.'
    },
    {
        id: 2,
        topic: 'MSI GeForce RTX 4070 Ti VENTUS 3X E1 12G OC',
        description: 'MSI, een toonaangevend merk in de wereld van gaming en computerhardware, staat bekend om zijn hoogwaardige grafische kaarten. Deze kaarten, ontworpen voor zowel gamers als professionals, bieden uitstekende prestaties en betrouwbaarheid. MSI\'s grafische kaarten zijn uitgerust met geavanceerde koelsystemen, zoals de Twin Frozr-serie, die zorgen voor efficiënte warmteafvoer en stille werking. Met innovatieve functies zoals RGB-verlichting, overklokmogelijkheden en robuuste bouwkwaliteit, leveren MSI grafische kaarten een optimale gamingervaring. Daarnaast ondersteunt MSI regelmatig hun producten met software-updates en gebruikersvriendelijke tools, wat bijdraagt aan hun reputatie als betrouwbare keuze voor pc-enthousiastelingen wereldwijd.'
    },
    {
        id: 3,
        topic: 'MSI GeForce RTX 4070 Ti VENTUS 3X E1 12G OC',
        description: 'MSI, een toonaangevend merk in de wereld van gaming en computerhardware, staat bekend om zijn hoogwaardige grafische kaarten. Deze kaarten, ontworpen voor zowel gamers als professionals, bieden uitstekende prestaties en betrouwbaarheid. MSI\'s grafische kaarten zijn uitgerust met geavanceerde koelsystemen, zoals de Twin Frozr-serie, die zorgen voor efficiënte warmteafvoer en stille werking. Met innovatieve functies zoals RGB-verlichting, overklokmogelijkheden en robuuste bouwkwaliteit, leveren MSI grafische kaarten een optimale gamingervaring. Daarnaast ondersteunt MSI regelmatig hun producten met software-updates en gebruikersvriendelijke tools, wat bijdraagt aan hun reputatie als betrouwbare keuze voor pc-enthousiastelingen wereldwijd.'
    }

]