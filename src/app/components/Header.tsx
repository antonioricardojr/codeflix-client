"use client";
import { Suspense } from 'react';
import React, { useState } from "react";
import Image from 'next/image';
import { UserProfile } from "./UserProfile";
import { NavLinks } from "./NavLinks";
import { useScroll } from "../hooks/useScroll";
import SearchForm from "./SearchForm";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";


export default function Header() {
    const isScrolled = useScroll();
    const router = useRouter();
    const params = useSearchParams();
    const initialSearchTerm = params.get('title') || '';
    const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);
    const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newParams = new URLSearchParams(params.toString());
        newParams.set('title', searchTerm);
        router.push(`/search?${newParams.toString()}`);
    };
    const Logo = () => (
        <Link href="/">
            <Image className="cursor-pointer" src='/logo.svg' alt='netflix' width={90} height={90}/>
        </Link>
    )

    const Loading = () => <div>Loading...</div>;

    return (
        <Suspense fallback={<Loading />}>
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

                <div className="flex items-center space-x-2">
                    <SearchForm searchTerm={searchTerm} onSearch={onSearch} onSearchTermEventChange={onSearchTermChange}/>
                    <UserProfile/>
                </div>
            </header>
        </Suspense>
    )
}

