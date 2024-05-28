"use client";
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import {
    Card,
    CardContent,
} from "@/components/ui/card"

import favIcon from '../public/icons/fav.svg'
import arrow from '../public/icons/arrow.svg'
import shipping from '../public/icons/shipping.svg'
import { ProductCardShow } from '@/lib/enums/product-card-show'
import { title } from 'process'
import { MoveUpRight, Truck } from 'lucide-react'



type Props = {
    id: number
    image: string,
    brand: string,
    name?: string,
    size?: string,
    description?: string,
    price?: number,
    discount?: number,
    deliveryTime?: string,
    isLastDrop?: boolean,
    showType?: ProductCardShow,
    className?: string
    link?: string
}

function ProductCard({ id, image, brand, name, size, description, price, discount, deliveryTime, isLastDrop, showType, className, link }: Props) {
    const router = useRouter()
    return (
        <>
            <Card className={className + ' ' + 'rounded-3xl w-72'} >
                <CardContent className='my-4 p-0  relative mx-5'>
                    <div className='relative h-40 w-40 mx-auto mt-16'>
                        <Image
                            src={image}
                            alt={name || 'product'}
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>
                    {isLastDrop && showType != ProductCardShow.mini && showType != ProductCardShow.compare && <div className='absolute -top-12 right-0'>
                        <Image src={favIcon} alt='favicon' width={50} height={50} />
                    </div>}

                    <div>
                        {showType === ProductCardShow.mini ? (
                            <button className='mx-auto text-center text-xl font-bold my-4 w-full' onClick={() => router.push(`brands/${id}`)}>
                                {brand}
                            </button>
                        ) : (
                            <>
                                <div className='text-left text-xl font-bold mt-1 mb-4'>
                                    <div>{name}</div>
                                    <div>{size}</div>
                                </div>
                                {
                                    description && <div className=' text-gray-500'>{description.substring(0, 50)} ... </div>
                                }
                                <div className=' flex justify-start gap-4 mt-4 items-center'>
                                    <div className=' font-bold'>€{price}</div>
                                    {showType === ProductCardShow.full &&
                                        <div className=' border-2 border-[#ff0000] rounded-md text-sm p-1 px-2 text-[#ff0000] font-semibold'>{discount} Goedkoper</div>
                                    } {showType === ProductCardShow.compare &&
                                        <div className=' border-2 border-[#18a661] rounded-md text-sm p-1 px-2 text-[#18a661] font-semibold'>Laagste prijs</div>
                                    }
                                </div>

                                <Separator className='my-4' />
                                {showType === ProductCardShow.full &&
                                    <div className=' flex justify-start items-center gap-2'>
                                        <Image src={shipping} alt='shippingicon' width={20} height={20} />
                                        <div className=' text-xs text-gray-500'>Binnen {deliveryTime} werkdagen in huis</div>
                                    </div>
                                }
                                <Button className='w-full my-6 bg-[#18a661] hover:bg-[#18a661] rounded-full text-white flex items-center gap-2 text-lg'>
                                    {showType === ProductCardShow.full ? 'Aanbieding bekijken' : showType === ProductCardShow.compare ? 'Vergelijken' : ''}
                                    <Image src={arrow} alt='arrowicon' width={10} height={10} />
                                </Button>


                            </>
                        )}
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default ProductCard

