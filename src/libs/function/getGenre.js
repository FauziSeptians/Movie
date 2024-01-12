import { getGenres } from "../Api/dataMovie";
import { useState, useEffect } from "react";

export async function getGenre(genreID) {
   let array = [];

   const response = await getGenres();

   genreID.map((el) => {
      response.map((element) => {
         if (el == element.id) {
            array.push(element.name);
         }
      });
   });

   return await array;
}
