import { useEffect, useState } from "react";
import { getGenre } from "../../libs/function/getGenre";
import { motion } from "framer-motion";

export default function MovieCardTopThree({ Title, Genres, Image }) {
   const [Categorys, setCategorys] = useState();

   useEffect(() => {
      const convertData = async () => {
         setCategorys(await getGenre(Genres));
      };

      convertData();
   }, []);

   console.log(Categorys);
   return (
      <motion.div
         whileHover={{ translateY: "-10px" }}
         className="cursor-pointer col-spa h-[250px] rounded-lg relative shadow-lg"
      >
         <img
            src={Image}
            className="h-full w-full absolute object-cover rounded-lg object-top"
         ></img>
         <div className="bg-[#103d5f] absolute h-full rounded-lg w-full opacity-30">
            t
         </div>
         <div className="absolute flex flex-col gap-1 bottom-4 left-4 text-white">
            <div className="animate-pulse text-[20px]">{Title}</div>
            <div className="flex gap-3">
               {Categorys &&
                  Categorys.map((e) => {
                     return (
                        <div className="animate-pulse text-[16px] opacity-80">
                           {e}
                        </div>
                     );
                  })}
            </div>
         </div>
      </motion.div>
   );
}
