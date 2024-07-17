import React from "react";
import { HeaderBar } from "../../components/Header";
import { getMovieById } from "../../service/MovieService";
import Player from "../../components/Player";

interface IWatchProps {
    params: {
        id: string;
    }
}

export default async function Watch({ params }: IWatchProps) {
    const movie = await getMovieById(params.id);


    if (!movie) {
        return (
            <div className="flex h-screen justify-center align middle">
                <HeaderBar />
                <main className="flex flex-1 flex-col items-center justify-center px-20 text-center">
                    <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
                        Sorry, this movie is not available.
                    </h1>
                </main>
            </div>
        )
    }
    return (
        <Player movie={movie} />
    )
}