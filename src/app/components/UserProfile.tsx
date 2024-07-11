"use client";
import React from "react";
import Image from 'next/image';

export const UserProfile = () => {
    return <div className="flex items-center space-x-2 md:space-x-4">
        <p className="hidden cursor-not-allowed lg:inline">Kids</p>
        <Image src="/avatar.png"
            alt=""
            className="cursor-pointer rounded" width={30} height={30} />
    </div>;
};
