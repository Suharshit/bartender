'use client';

import Link from 'next/link';
import { ArrowUpRight }  from "lucide-react";
import { Button } from '@/components/ui/button';

export default function Home() {
  return(
    <div className="w-full mt-28 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-[4.5vw] leading-24 font-bold">
          Your Personal <br /> AI Mixologist 
        </h1>
        <h2 className='font-semibold text-3xl mt-4'>Perfect Cocktails, Every Time!</h2>
        <div className='flex items-center justify-center mt-4 mb-4 space-x-8'>
          <Link href={'/chat'} className='flex'>
            <Button variant={"outline"} className='text-zinc-900 text-xl font-semibold cursor-pointer'>
              Try It.<ArrowUpRight/>
            </Button>
          </Link>
          <Link href={'/developer'} className='flex cursor-pointer'>
            <button className='border-1 border-white px-2 py-2 rounded-lg cursor-pointer'>
              About Developer&apos;s
            </button>
          </Link>
        </div>
        <p className="w-[650px] text-lg">Meet MixBot – your AI-powered drink wizard! 🍹 Just pick your vibes, drop your ingredients, and let the bot craft the perfect cocktail. No guesswork, no hassle—just straight-up mixology magic. Cheers to next-level sipping! 🚀🥂</p>
      </div>
    </div>
  )
}