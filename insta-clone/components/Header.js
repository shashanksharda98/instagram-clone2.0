import React from 'react'
import Image from "next/image";
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
} from '@heroicons/react/outline';
import {HomeIcon} from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/react';
import {useRouter} from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtoms';

function Header() {

    const {data: session} = useSession();
    const router = useRouter();
    const[open, setOpen] = useRecoilState(modalState);
    
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
                {/* left */}
                <div onClick={() => router.push('/')} className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
                    layout="fill"
                    objectFit="contain"
                    />
                </div>

                <div onClick={() => router.push('/')} className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image src="/logos/5ecec78673e4440004f09e77.png"
                    layout="fill"
                    objectFit="contain"
                    />
                </div>


                {/* middle - search bar */}

                <div className="max-w-xs"> 
                    <div className="relative mt-1 p-3 rounded-md ">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md
                        focus:ring-black focus:border-black" type="text" placeholder="search" />
                    </div>
                </div>

                {/* right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon onClick={() => router.push('/')} className="navBtn" />
                    <MenuIcon className="h-6 md:hidden cursor-pointer"/>

                    {session? (
                        <>
                            <div className="relative navBtn">
                                <PaperAirplaneIcon className="navBtn transform rotate-45"/>
                                <div className="absolute -top-3 -right-0 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center
                                    animate-pulse text-white" >
                                    3
                                </div>
                            </div>
                            <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn"/>

                            <UserGroupIcon className="navBtn" />

                            <HeartIcon className="navBtn" />

                            <img src={session?.user?.image} alt="profile pic" 
                            className="h-10 w-10 rounded-full cursor-pointer"
                            onClick={signOut}
                            />

                        </>
                    ): (
                        <button onClick={signIn}>Sign In</button>
                    )}

                    

                    
                </div>
                
            </div>

            
        </div>
    )
}

export default Header
