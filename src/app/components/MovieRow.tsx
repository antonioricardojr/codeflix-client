import Image from "next/image";
import { Movie, Movies } from "../types/movie";
import Link from "next/link";
import { ChevronDownIcon, PlayIcon, PlusIcon, SpeakerWaveIcon, UserGroupIcon } from "@heroicons/react/16/solid";

type MovieRowPros = {
    sectionTitle: string;
    movies: Movies;
}

type MovieCardProps = {
    index: number;
    movie: Movie;
}
const MovieCard = ({ movie } : {movie: Movie}) => {
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

              <div className="absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4">
                <div className="flex flex-row items-center justify-between gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover: bg-white">
                      <Link href={`/watch/${movie.id}`}>
                        <PlayIcon className="w-4 lg:w-6" />
                      </Link>
                    </div>
                    <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover: bg-white">
                      <PlusIcon className="w-4 lg:w-6" />
                    </div>
                  </div>
                  <div className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover: bg-white">
                    <ChevronDownIcon className="w-4 lg:w-6" />
                  </div>
                </div>

                <div className="mt-4 text-sm font-bold text-white lg:text-lg">
                  {movie.title}
                </div>

                <div className="mt-4 flex flex-col gap-2 text-sm">
                  <div className="flex flex-row items-center gap-2">
                    <SpeakerWaveIcon className="w-4" /> Double Atmos 5.1 4K
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <UserGroupIcon className="w-4" />
                  </div>
                </div>

                <div className="mt-4 flex flex-row items-center gap-2 text-[8px] text-white lg:text-sm">
                  <p>{movie.genres.join('  .   ')}</p>
                </div>

              </div>

            </div>
      </div>
    )
}

export default function MovieRow({ sectionTitle, movies }: MovieRowPros) {
    return (
        <div className="flex-col space-y-4">
  <div className="flex">
    <h2 className="-ml-2 inline-flex items-center text-2xl font-bold">{sectionTitle}</h2>
  </div>
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
      {movies && movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
</div>
    )
}