import axios from "axios";
import { getsortCastPopularity } from "../function/getSortedCastPopularity";

export async function getThreePopularmovie() {
   const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
         headers: {
            Authorization:
               "Bearer " +
               "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUzODdjYTY1NDA1NDU5MDk2YWE2YTA1N2I1Y2NkOCIsInN1YiI6IjY1OWVhNTYzZmM1ZjA2MDIwMGE1MjVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvlzH-t000ec11-JszqHaBULWhgVG3C8Cjt4GGzaXPM",
         },
      }
   );

   const getThreeMovie = response.data.results.filter((Element, index) => {
      if (index < 3) {
         return Element;
      }
   });

   return getThreeMovie;
}


export async function getAllPopularMovie() {
   const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
         headers: {
            Authorization:
               "Bearer " +
               "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUzODdjYTY1NDA1NDU5MDk2YWE2YTA1N2I1Y2NkOCIsInN1YiI6IjY1OWVhNTYzZmM1ZjA2MDIwMGE1MjVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvlzH-t000ec11-JszqHaBULWhgVG3C8Cjt4GGzaXPM",
         },
      }
   );



   return response.data.results;
}

export async function getRecomendationPopularmovie() {
   const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
         headers: {
            Authorization:
               "Bearer " +
               "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUzODdjYTY1NDA1NDU5MDk2YWE2YTA1N2I1Y2NkOCIsInN1YiI6IjY1OWVhNTYzZmM1ZjA2MDIwMGE1MjVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvlzH-t000ec11-JszqHaBULWhgVG3C8Cjt4GGzaXPM",
         },
      }
   );

   const getThreeMovie = response.data.results.filter((Element, index) => {
      if (index < 4) {
         return Element;
      }
   });

   return getThreeMovie;
}



export async function getBannerMovie() {
   const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
         headers: {
            Authorization:
               "Bearer " +
               "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUzODdjYTY1NDA1NDU5MDk2YWE2YTA1N2I1Y2NkOCIsInN1YiI6IjY1OWVhNTYzZmM1ZjA2MDIwMGE1MjVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvlzH-t000ec11-JszqHaBULWhgVG3C8Cjt4GGzaXPM",
         },
      }
   );

   return response.data.results[0];
}

export async function getNowPlayingMovie() {
   const response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
         headers: {
            Authorization:
               "Bearer " +
               "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUzODdjYTY1NDA1NDU5MDk2YWE2YTA1N2I1Y2NkOCIsInN1YiI6IjY1OWVhNTYzZmM1ZjA2MDIwMGE1MjVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvlzH-t000ec11-JszqHaBULWhgVG3C8Cjt4GGzaXPM",
         },
      }
   );

   return response.data.results;
}

export async function getUpcomingMovies() {
   const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming",
      {
         headers: {
            Authorization:
               "Bearer " +
               "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUzODdjYTY1NDA1NDU5MDk2YWE2YTA1N2I1Y2NkOCIsInN1YiI6IjY1OWVhNTYzZmM1ZjA2MDIwMGE1MjVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvlzH-t000ec11-JszqHaBULWhgVG3C8Cjt4GGzaXPM",
         },
      }
   );

   return response.data.results;
}

export async function getRatedMovies() {
   const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated",
      {
         headers: {
            Authorization:
               "Bearer " +
               "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUzODdjYTY1NDA1NDU5MDk2YWE2YTA1N2I1Y2NkOCIsInN1YiI6IjY1OWVhNTYzZmM1ZjA2MDIwMGE1MjVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvlzH-t000ec11-JszqHaBULWhgVG3C8Cjt4GGzaXPM",
         },
      }
   );

   return response.data.results;
}

export async function getDetailData(id) {
   const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
         headers: {
            Authorization:
               "Bearer " +
               "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUzODdjYTY1NDA1NDU5MDk2YWE2YTA1N2I1Y2NkOCIsInN1YiI6IjY1OWVhNTYzZmM1ZjA2MDIwMGE1MjVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvlzH-t000ec11-JszqHaBULWhgVG3C8Cjt4GGzaXPM",
         },
      }
   );

   return response.data;
}

export async function getGenres() {
   const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list",
      {
         headers: {
            Authorization:
               "Bearer " +
               "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUzODdjYTY1NDA1NDU5MDk2YWE2YTA1N2I1Y2NkOCIsInN1YiI6IjY1OWVhNTYzZmM1ZjA2MDIwMGE1MjVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvlzH-t000ec11-JszqHaBULWhgVG3C8Cjt4GGzaXPM",
         },
      }
   );

   return response.data.genres;
}

export async function getDataCast(movieID) {
   const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieID}/credits`,
      {
         headers: {
            Authorization:
               "Bearer " +
               "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUzODdjYTY1NDA1NDU5MDk2YWE2YTA1N2I1Y2NkOCIsInN1YiI6IjY1OWVhNTYzZmM1ZjA2MDIwMGE1MjVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvlzH-t000ec11-JszqHaBULWhgVG3C8Cjt4GGzaXPM",
         },
      }
   );

   const sortedData = getsortCastPopularity(response.data.cast, "popularity");

   return sortedData.slice(0, 5);
}

export async function getDataDirector(movieID) {
   const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieID}/credits`,
      {
         headers: {
            Authorization:
               "Bearer " +
               "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTUzODdjYTY1NDA1NDU5MDk2YWE2YTA1N2I1Y2NkOCIsInN1YiI6IjY1OWVhNTYzZmM1ZjA2MDIwMGE1MjVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nvlzH-t000ec11-JszqHaBULWhgVG3C8Cjt4GGzaXPM",
         },
      }
   );

   const DataDirector = response.data.crew.filter((e) => {
      if (e.job == "Director") {
         return e;
      }
   });

   return DataDirector;
}
