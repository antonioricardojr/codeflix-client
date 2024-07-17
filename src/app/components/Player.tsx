"use client";
import React from 'react'
import { Movie } from '../types/movie'
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import Link from 'next/link';
import '@vidstack/react/player/styles/base.css';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
export default function Player({movie} : {movie: Movie}) {

  return (
    <div className='flex h-screen justify-center align-middle'>
        <MediaPlayer 
            controls={true}
            title={movie.title}
            src={movie.videoFileURL}
            className='ring-media-focus aspect-video w-full rounded-md bg-black' 
            >
            <Link href="/">
                <ArrowLeftIcon className='w-6 h-6 media-playing:opacity-0 absolute left-8 top-8
                 z-50  transition-opacity duration-300 ease-in-out hover:opacity-70
                '></ArrowLeftIcon>
            </Link>
            <MediaProvider />
        </MediaPlayer>        
    </div>
  )
}
