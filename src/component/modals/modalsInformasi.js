import TextInformation from "../Card/TextInformation";
import { getDataYears } from "../../libs/function/getDataYears";
import { motion } from "framer-motion";
import { getDataCast, getDataDirector } from "../../libs/Api/dataMovie";
import { useEffect, useState } from "react";

export default function ModalsInformation({ CloseModals, DataMovie }) {
   const [DataCast, setDataCast] = useState();
   const [DataDirector, setDataDirector] = useState();

   useEffect(() => {
      const data = async () => {
         const response = await getDataCast(DataMovie.id);
         const DataDirector = await getDataDirector(DataMovie.id);
         console.log(response);
         setDataCast(response);
         setDataDirector(DataDirector);
      };
      data();
   }, []);
   return (
      <motion.section
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.2 }}
         className="h-screen w-full bg-[#000000e5] flex justify-center items-center absolute z-10"
      >
         <motion.div
            className="w-[30%] p-5 text-white"
            initial={{ opacity: 0, translateY: "100px" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.4 }}
         >
            <div className="flex justify-between mb-[50px]">
               <div className="flex justify-center "></div>
               <div className="flex justify-center text-[24px] tracking-wide">
                  Movie Information
               </div>
               <div
                  className="flex justify-center cursor-pointer"
                  onClick={() => CloseModals()}
               >
                  X
               </div>
            </div>
            <div className="flex flex-col gap-3 ">
               <TextInformation
                  Key="Title"
                  Value={DataMovie.original_title}
               ></TextInformation>
               <TextInformation
                  Key="Years"
                  Value={getDataYears(DataMovie.release_date)}
               ></TextInformation>
               <TextInformation
                  Key="Overview"
                  Value={DataMovie.overview}
               ></TextInformation>
               <TextInformation
                  Key="Genres"
                  Value={DataMovie.genres}
               ></TextInformation>
               <TextInformation Key="Cast" Value={DataCast}></TextInformation>
               <TextInformation
                  Key="Director"
                  Value={DataDirector}
               ></TextInformation>
            </div>
         </motion.div>
      </motion.section>
   );
}
