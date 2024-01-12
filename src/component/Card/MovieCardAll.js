import { motion } from "framer-motion";
import { getDataYears } from "../../libs/function/getDataYears";
import { getGenre } from "../../libs/function/getGenre";
import { useEffect, useState } from "react";

export default function MovieCardAll({ Title, Years, Category, Images }) {
   console.log(Title);
   console.log(Years);
   console.log(Category);
   console.log("genreess");
   const [Categorys, setCategorys] = useState();

   useEffect(() => {
      const convertData = async () => {
         setCategorys(await getGenre(Category));
      };

      convertData();
   }, []);

   console.log(Categorys);

   return (
      <motion.div whileHover={{ translateY: "-10px" }}>
         <div className="col-span cursor-pointer  bg-slate-700 h-[350px] rounded-md relative">
            <img
               src={Images}
               className="rounded-md w-full h-full pbject-top object-cover"
            ></img>
            <div className="animate-pulse absolute top-1 right-3 px-3 py-2 rounded-lg bg-[#103d5f] text-[14px] font-semibold text-white">
               {getDataYears(Years)}
            </div>
         </div>
         <div className="flex flex-col gap-1 z-100 mt-3">
            <div className="text-[18px]">{Title}</div>
            <div className="flex gap-3 text-center">
               {Categorys &&
                  Categorys.map((e, idx) => {
                     if (idx < 3) {
                        return (
                           <div className="text-[14px] opacity-80">{e}</div>
                        );
                     }
                  })}
            </div>
         </div>
      </motion.div>
   );
}
