import { useEffect, useState } from "react";
import ButtonTextImage from "../Button/buttonTextImage";
import { getGenre } from "../../libs/function/getGenre";

export default function BannerComponent({ BannerMovie }) {
   const [Categorys, setCategorys] = useState();
   console.log(BannerMovie);
   useEffect(() => {
      if (BannerMovie.genre_ids) {
         const convertData = async () => {
            setCategorys(await getGenre(BannerMovie.genre_ids));
         };
         convertData();
      }


   }, [BannerMovie]);

   return (
      <section className="bg-red-200 w-full h-[650px] relative">
         {BannerMovie ? (
            <img
               src={`https://image.tmdb.org/t/p/w1280${BannerMovie.poster_path}`}
               className="absolute object-cover h-full w-full opacity-50 object-top"
            ></img>
         ) : (
            ""
         )}
         <div className="absolute top-[30%] left-[10%] flex flex-col gap-7">
            <div>
               <div className="font-bold text-[40px] tracking-wider">
                  {BannerMovie ? BannerMovie.original_title : ""}
               </div>
               <div className="flex gap-3">
                  {Categorys &&
                     Categorys.map((e) => {
                        return (
                           <div className="font-normal opacity-50 text-[18px]">
                              {e}
                           </div>
                        );
                     })}
               </div>
            </div>
            {BannerMovie && (
               <a className="w-fit" href={`/detail/${BannerMovie.id}`}>
                  <ButtonTextImage Title="Watch Now"></ButtonTextImage>
               </a>
            )}
         </div>
      </section>
   );
}
