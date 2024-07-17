import React from "react";
import { searchMovies } from "../service/MovieService";
import { HeaderBar } from "../components/Header";
import MovieCard from "../components/MovieCard";

interface ISearchParams {
    title: string;
    genre: string;
}

interface ISearchProps {
    searchParams: ISearchParams;
}

export default async function SearchResults({ searchParams} : ISearchProps) {
    const { title, genre } = searchParams;

    const movies = await searchMovies(title, genre);

    if (movies.length === 0) {
        return (
            <div className="relative bg-gradient-to-b pb-8">
                <HeaderBar />
                <main className="relative mb-48 mt-28 h-screen pl-4 lg:pl-16">
                    <h1 className="mb-4 text-2xl font-bold">
                        Search Results for: <span className="text-red-500">{title}</span>
                    </h1>
                    <p className="text-xl">No movies found</p>
                </main>
            </div>
        )
    }

    return (
        <div className="relative bg-gradient-to-b pb-8">
            <HeaderBar />
            <main className="relative mb-48 mt-28 h-screen pl-4 lg:pl-16">
                <h1 className="mb-4 text-2xl font-bold">
                    Search Results for: <span className="text-red-500">{title}</span>
                </h1>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
                    {movies && movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>
            </main>
        </div>
    )
}