import Image from "next/image";
import { Movie, Movies } from "../types/movie";

type MovieRowPros = {
    sectionTitle: string;
    movies: Movies;
}

type MovieCardProps = {
    index: number;
    movie: Movie;
}
const MovieCard = ({ index, movie } : MovieCardProps) => {
    return (
        <div key={index} className="group relative h-28 min-w-[200px] transform bg-gradient-to-t from-transparent to-bla
        transition duration-200 ease-in  hover:z-50 hover:scale-110
        md:h-40 md:min-w-[300px] lg:h-52 lg:min-w-[400px]
        ">
          <Image
            src={movie.bannerFileURL}
            fill={true}
            alt={movie.title}
            className="rounded"
          />
      </div>
    )
}

export default function MovieRow({ sectionTitle, movies }: MovieRowPros) {
    return (
        <div className="flex-col space-y-4">
  <div className="flex">
    <h2 className="-ml-2 inline-flex items-center text-2xl font-bold">{sectionTitle}</h2>
  </div>
  <div className="-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide">
      {movies && movies.map((movie) => (
        <MovieCard key={movie.id} index={movie.id} movie={movie}/>
      ))}
    </div>
</div>
    )
}