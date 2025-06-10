import axios from "axios";

export async function getMovies() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TMDB_API_URL}/movie/now_playing`,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    return [];
  }
}

// Get pelo id
export async function getMovieDetails(id: number) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_TMDB_API_URL}/movie/${id}
      `,
      {
        params: {
          api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
          language: "pt-BR",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do filme:", error);
    return;
  }
}
