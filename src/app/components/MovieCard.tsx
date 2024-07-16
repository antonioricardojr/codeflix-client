import { Movie } from "../types/movie"
import Image from "next/image";
import MovieInfo from "./MovieInfo";



export default function MovieCard({ movie } : {movie: Movie}) {

    return (
        <div key={movie.id} className="group relative min-h-[12vh] rounded bg-zinc-900 md:min-h-[12vw] ">
            <Image 
                alt={movie.title}
                src={movie.bannerFileURL}
                width={600}
                height={400}
                className="rounded-md object-cover object-top transition"
            />

            <div className="
                invisible 
                absolute 
                top-0 
                z-10 
                w-full 
                min-w-[20vw] 
                scale-0 
                opacity-0 
                transition 
                delay-300 
                duration-200 
                group-hover:-translate-y-[6vw]
                group-hover:scale-110
                group-hover:opacity-100 
                sm:visible
                ">
                    <h1>{movie.title} {movie.yearLaunched}</h1>
                    <Image 
                        alt={movie.title}
                        src={movie.bannerFileURL}
                        width={600}
                        height={400}
                        className="duration h-[12vw] w-full cursor-pointer rounded-t-md object-cover object-top shadow-xl transtion"
                    />
                    <MovieInfo movie={movie}/>
                </div>
    </div>
    )
}