'use client'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'
  import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
        <div className='flex w-full justify-between text-2xl '>
            <div>
                <Link href={'/'}>
                    <h1 className='font-semibold select-none'>MixBot AI</h1>
                </Link>
            </div>
            <div>
            <SignedOut>
                <SignInButton>
                    <Button variant={"outline"} className='text-zinc-900 text-lg font-semibold cursor-pointer'>Sign In</Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton appearance={{
                    elements: {
                        userButtonAvatarBox: 'w-24 h-24',
                    }
                }}/>
            </SignedIn>
            </div>
        </div>
    </>
  )
}

export default Navbar