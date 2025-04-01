'use client';

// import { useState } from 'react';
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { generateDrinkRecipes, Recipe } from "@/lib/gemini-service";
import Link from 'next/link';

export default function Home() {
  return(
    <div>
      <Link href={'/chat'} className='px-4 py-2 bg-black text-white ml-4 rounded-lg text-lg'>chat</Link>
    </div>
  )
}