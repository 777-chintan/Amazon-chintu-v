import React from 'react';
import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import {signIn, signOut, useSession} from "next-auth/client";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';


function Header() {

    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header className="sticky top-0 z-50">
            {/* top navigation */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                
                {/* left */}
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        onClick={() => router.push('/')}
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />

                </div>
                {/* search bar */}
                <div className="hidden sm:flex rounded-md items-center flex-grow cursor-pointer h-10 bg-yellow-400 hover:bg-yellow-500">
                    <input type="text" className="p-2 px-4 sh-full flex-grow flex-shrink focus:outline-none width-6 rounded-l-md" />
                    <SearchIcon className="h-12 p-3"/>
                </div>

                {/* right side */}
                <div className="flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    
                    <div className="link" onClick={!session?signIn:signOut}>
                        <p>{
                            session?`Hello, ${session.user.name}`:`Sign IN`
                        }</p>
                        <p className="font-extrabold md:text-sm"> Account & Lists</p>
                    </div>
                    
                    <div className="link">
                        <p>Retuns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>

                    <div className="link items-center relative flex"
                        onClick={() => router.push('/checkout')}>
                        <span className="absolute text-center font-bold text-black top-0 right-0 h-4 w-4 bg-yellow-400 rounded-full md:right-10">{items.length}</span>
                        <ShoppingCartIcon className="h-8"/>
                        <p className="hidden font-extrabold md:text-sm md:inline mt-2">Basket</p>
                    </div>

                </div>
            </div>

            {/* bottom navigation */}
            <div className="flex items-center space-x-3 bg-amazon_blue-light text-white text-sm h-8">
                <p className="flex items-center cursor-pointer hover:underline pl-3">
                    <MenuIcon className="h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Prime Pay</p>
                <p className="link">Best Sellers</p>
                <p className="link">Mobiles</p>
                <p className="link">Buy Again</p>
                <p className="hidden link md:inline-flex">Customer Service</p>
                <p className="hidden link md:inline-flex">Pantry</p>
                <p className="hidden link md:inline-flex">Electronics</p>
                <p className="hidden link md:inline-flex">Fashion</p>
                <p className="hidden link lg:inline-flex">New Releases</p>
                <p className="hidden link lg:inline-flex">Computers</p>
                <p className="hidden link lg:inline-flex">Gift Cards</p>
            </div>
        </header>
    )
}

export default Header
