import ButtonTextImage from "../component/Button/buttonTextImage";
import OutlineButton from "../component/Button/outlinebutton";
import ModalsInformation from "../component/modals/modalsInformasi";
import { useEffect, useState } from "react";
import {
   getDetailData,
   getRecomendationPopularmovie,
} from "../libs/Api/dataMovie";
import { useParams } from "react-router-dom";
import MovieCardAll from "../component/Card/MovieCardAll";
import ButtonDown from "../component/Button/buttonArrowDown";
import ButtonUp from "../component/Button/buttonArrowUp";
import RecomendationModalsBottom from "../component/modals/recomendationModalsBottom";
import ButtonPrev from "../component/Button/buttonPrev";
import { motion, AnimatePresence } from "framer-motion";
import LoadingMovie from "../component/loading/loadingmovie";


export default function DetailMovie() {
   const { id } = useParams();
   const [dataMovie, setDataDetail] = useState();
   const [ModalsShow, setModalsShow] = useState(false);
   const [DataRecomendation, setDataRecomendation] = useState();
   const [ShowRecomendation, setShowRecomendation] = useState(false);
   const [showLottie, setShowLottie] = useState(true);
   useEffect(() => {
      const getData = async () => {
         try {
            const response = await getDetailData(id);
            console.log(response);

            setDataDetail(response);
            // setShowLottie(false)
            setTimeout(() => {
               setShowLottie(false);
            }, [2000]);
         } catch (error) {
            if (error.message.includes("404")) {
               window.location.href = "/404";
            }
         }
      };

      const getDataRecomendation = async () => {
         const response = await getRecomendationPopularmovie();
         setDataRecomendation(response);
      };

      getDataRecomendation();

      getData();
   }, []);

   console.log(dataMovie);
   console.log(DataRecomendation);
   console.log(ShowRecomendation);

   return (
      <>
         <AnimatePresence>
            {showLottie && <LoadingMovie></LoadingMovie>}
         </AnimatePresence>

         {ModalsShow && (
            <ModalsInformation
               CloseModals={() => setModalsShow(false)}
               DataMovie={dataMovie}
            ></ModalsInformation>
         )}

         {ShowRecomendation && (
            <RecomendationModalsBottom
               DataRecomendation={DataRecomendation}
               setShowRecomendation={() => setShowRecomendation(false)}
            ></RecomendationModalsBottom>
         )}

         <section className="h-screen w-full relative">
            <div className="absolute top-[10%] left-[5%] z-50">
               <motion.a href="/">
                  <ButtonPrev />
               </motion.a>
            </div>
            {dataMovie && (
               <>
                  <img
                     src={
                        "https://image.tmdb.org/t/p/w1280" +
                        dataMovie.backdrop_path
                     }
                     className="w-full h-screen absolute"
                  ></img>
                  <div className="w-full h-screen bg-[#00000075] absolute"></div>
               </>
            )}
            <div className="Informasi absolute bottom-[10%] left-[5%] text-white">
               <div className="text-[40px] font-semibold">
                  {dataMovie && dataMovie.original_title}
               </div>
               <div className="w-[450px] break-normal text-justify">
                  {dataMovie && dataMovie.overview}
               </div>
               <div className="w-fit flex gap-4 mt-5">
                  <ButtonTextImage Title={"Watch Now"}></ButtonTextImage>
                  <div onClick={() => setModalsShow(true)}>
                     <OutlineButton Title={"More Info"}></OutlineButton>
                  </div>
               </div>
            </div>
            <div
               onClick={() => setShowRecomendation(true)}
               className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 animate-bounce"
            >
               <ButtonUp></ButtonUp>
            </div>
         </section>
      </>
   );
}
