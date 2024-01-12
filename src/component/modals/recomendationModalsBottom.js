import ButtonDown from "../Button/buttonArrowDown";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getGenre } from "../../libs/function/getGenre";

export default function RecomendationModalsBottom({
   DataRecomendation,
   setShowRecomendation,
}) {
   console.log(DataRecomendation);
   const [Categorys, setCategorys] = useState();

   return (
      <motion.div
         className="absolute z-10 h-screen w-full flex items-end bg-[#000000af]"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.2 }}
      >
         <div className="mb-5">
            <div className="flex justify-center">
               <div
                  onClick={() => setShowRecomendation()}
                  className="bottom-[20px] left-1/2 transform -translate-x-1/2 animate-bounce"
               >
                  <ButtonDown></ButtonDown>
               </div>
            </div>
            <div className="h-[300px] w-full">
               <div className="grid grid-cols-4 p-[50px] gap-5">
                  {DataRecomendation &&
                     DataRecomendation.map((element, idx) => {
                        return (
                           <motion.a
                              className="h-[200px] rounded-lg relative cursor-pointer"
                              initial={{ translateY: "10px", opacity: 0 }}
                              animate={{ translateY: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.3 }}
                              href={`/detail/${element.id}`}
                           >
                              <img
                                 src={
                                    "https://image.tmdb.org/t/p/w1280" +
                                    element.backdrop_path
                                 }
                                 className="rounded-lg opacity-75"
                              ></img>

                              <motion.div className="absolute bottom-0 left-[20px] text-[white]">
                                 <div className="text-[20px] font-semibold truncate tracking-wide">
                                    {element.original_title}
                                 </div>
                                 {/* <div className="text-[16px]">genre</div> */}
                                 {/* {Categorys &&
                                    Categorys.map((e) => {
                                       return (
                                          <div className="text-[16px]">
                                             genre
                                          </div>
                                       );
                                    })} */}
                              </motion.div>
                           </motion.a>
                        );
                     })}
               </div>
            </div>
         </div>
      </motion.div>
   );
}
