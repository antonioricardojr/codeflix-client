import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import Banner from "./components/Banner";
import { getFeaturedMovie } from "./service/MovieService";

export default async function Home() {

  const featuredMovie = await getFeaturedMovie("106");

  return (
  <div className="relative h-screen overflow-hidden bg-gradient-to-b lg:h-[148vh]">
    <Header/>
    <main className="relative pb-24 pl-4 lg:pl-16">
        <Banner movie={featuredMovie}/>
        <MovieRow sectionTitle="Trending Now"/>
        <MovieRow sectionTitle="Top Rated"/>
        <MovieRow sectionTitle="Action Movies"/>
     </main>
  </div>);
}
