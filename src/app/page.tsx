import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import Banner from "./components/Banner";
import { getFeaturedMovie, getMoviesByGenre } from "./service/MovieService";
import { Movies } from "./types/movie";

export default async function Home() {

  const featuredMovie = await getFeaturedMovie("106");


  const genres = ['Sci-Fi', 'Drama']
  
  const moviesByGenre = await Promise.all(
    genres.map(async (genre) => {
      const movies: Movies = await getMoviesByGenre(genre,  { _limit: 8 });
      return { sectionTitle: genre, movies}
    })
  );


  return (
  <div className="relative h-screen overflow-hidden bg-gradient-to-b lg:h-[148vh]">
    <Header/>
    <main className="relative pb-24 pl-4 lg:pl-16">
        <Banner movie={featuredMovie}/>
        {moviesByGenre.map((genre) => (
            <div>
              {<MovieRow key={genre.sectionTitle} sectionTitle={genre.sectionTitle} movies={genre.movies}/>}
            </div>          
            
        ))}
        
     </main>
  </div>);
}
