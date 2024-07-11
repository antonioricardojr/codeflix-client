"use client";
import React from "react";
import Image from 'next/image';
import { UserProfile } from "./UserProfile";
import { NavLinks } from "./NavLinks";
import { useScroll } from "../hooks/useScroll";

export default function Header() {
    const isScrolled = useScroll();

    
    const Logo = () => (
        <Image className="cursor-pointer" src='/logo.svg' alt='netflix' width={90} height={90}/>
    )

    return (
        <header className={`${isScrolled && 'bg-black'}
        fixed
        top-0
        z-50
        flex
        w-full
        items-center
        justify-between
        bg-gradient-to-t
        from-transparent
        to-black
        p-2
        px-4
        transition-all
        lg:px-16
        lg:py-6
        `}>
            <div className="flex items-center space-x-2">
                <Logo/>
                <NavLinks/>
            </div>

            <UserProfile/>
        </header>
    )
}

