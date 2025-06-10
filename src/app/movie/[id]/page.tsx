import Image from "next/image";
import { getMovieDetails } from "@/utils/actions/api";
import { MoviesProps } from "@/utils/type";
import Link from "next/link";
interface ServicesPageProps {
  params: Promise<{ id: string }>;
}

export default async function MovieDetails(props: ServicesPageProps) {
  const { id } = await props.params; // <-- aqui você "resolve" a promise
  const numId = Number(id);

  const movieId: MoviesProps = await getMovieDetails(numId);
  return (
    <main className="w-full flex justify-center mt-20">
      <div
        className="container flex h-full 
      max-sm:flex-col max-sm:items-center
      "
      >
        <div
          className=" w-1/2
        max-sm:w-full
        "
        >
          <Image
            height={500}
            width={500}
            src={`https://image.tmdb.org/t/p/original/${movieId.poster_path}`}
            alt="Image do filme"
            quality={100}
            priority={true}
            className="object-cover rounded-2xl"
          />
        </div>
        <div
          className="w-1/2 flex flex-col gap-5 mt-5
          max-sm:w-full   max-sm:px-2"
        >
          <h1 className="text-white text-2xl font-semibold">
            {movieId.original_title}{" "}
          </h1>
          <p className="text-white">
            <strong className="text-xl"> Sinopse: </strong>
            {movieId.overview}
          </p>

          <p className="text-white">
            <strong className="text-xl">Genero: </strong>
            {movieId.genres.map((genre) => genre.name).join(" / ")}
          </p>
          <p className="text-white">
            <strong className="text-xl">Audio: </strong>
            {movieId.spoken_languages
              .map((genre) => genre.english_name)
              .join(" / ")}
          </p>

          <p className="text-white">
            <strong className="text-xl">Data lançamento: </strong>
            {movieId.release_date}
          </p>

          <p className="text-white">
            <strong className="text-xl">Produção: </strong>
            {movieId.production_companies
              .map((company) => company.name)
              .join(" / ")}
          </p>

          <p className="text-white">
            <strong className="text-xl">Produzido: </strong>
            {movieId.production_countries
              .map((country) => country.name)
              .join(" / ")}{" "}
          </p>
          <p className="text-white">
            <strong className="text-xl">Nota: </strong>
            {movieId.vote_average} / 10
          </p>
          {movieId.homepage && (
            <p className="text-white">
              <strong className="text-xl">Steam: </strong>
              <Link
                href={movieId.homepage}
                target="_blank"
                className="text-blue-500 transition duration-500 hover:underline"
              >
                {movieId.homepage}
              </Link>
            </p>
          )}

          <Link
            href={`https://www.youtube.com/results?search_query=${movieId.original_title}`}
            target="_blank"
            className="text-white text-md text-center font-semibold bg-gray-600 w-25 rounded-lg py-2 transition duration-500 hover:bg-gray-800
            max-sm:w-full
            "
          >
            Trailer
          </Link>
        </div>
      </div>
    </main>
  );
}
