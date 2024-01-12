import "../App.js";
import { useEffect, useState, useRef, createRef } from "react";
import {
   getThreePopularmovie,
   getBannerMovie,
   getNowPlayingMovie,
   getUpcomingMovies,
   getRatedMovies,
   getAllPopularMovie
} from "../libs/Api/dataMovie.js";
import MovieCardTopThree from "../component/Card/MovieCardTopThree.js";
import MovieCardAll from "../component/Card/MovieCardAll.js";
import ButtonText from "../component/Button/buttonText.js";
import ButtonTextImage from "../component/Button/buttonTextImage.js";
import ButtonNext from "../component/Button/buttonNext.js";
import ButtonPrev from "../component/Button/buttonPrev.js";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
   BrowserRouter,
   Routes,
   Route,
   Router,
   NavLink,
} from "react-router-dom";
import DetailMovie from "../pages/detail.js";
import { getGenre } from "../libs/function/getGenre.js";
import LoadingMovie from "../component/loading/loadingmovie.js";
import BannerComponent from "../component/BannerComponent/bannercomponent.js";

export default function Home({ ClickedData }) {
   const [BannerMovie, setBannerMovie] = useState();
   const [PopularMovie, setPopularMovie] = useState();
   const [NowPlayingMovie, setNowPlayingMovie] = useState();
   const [UpcomingMovies, setUpcomingMovies] = useState();
   const [PopularAllMovie, setAllPopularMovies] = useState();
   const [TargetIdx, setTargetIdx] = useState(8);
   const [TopRatedMovie, setTopRatedMovie] = useState();
   const [UpcomingIDX, setUpcomingIDX] = useState({
      firstIDX: 0,
      lastIDX: 4,
   });
   const [TopRatedIDX, setTopRatedIDX] = useState({
      firstIDX: 0,
      lastIDX: 4,
   });
   const [SearchData, setSearchData] = useState();
   const [checkedFilter, setCheckedFilter] = useState("NowPlaying");
   const [showMore, setShowMore] = useState(true);
   const refDiv = useRef();
   const [showLottie, setShowLottie] = useState(true);

   useEffect(() => {
      const renderAPI = async () => {
         setPopularMovie(await getThreePopularmovie());
         // setPopularMovie(await getAllPopularMovie()); //
         setAllPopularMovies(await getAllPopularMovie())
         setSearchData(await getNowPlayingMovie());
         setBannerMovie(await getBannerMovie());
         setNowPlayingMovie(await getNowPlayingMovie());
         setUpcomingMovies(await getUpcomingMovies());
         setTopRatedMovie(await getRatedMovies());
      };
      renderAPI();
      setTimeout(() => {
         setShowLottie(false);
      }, [2000]);
   }, []);
   console.log(PopularMovie);
   console.log(BannerMovie);
   console.log(NowPlayingMovie);

   const FilterSearchData = (Kategori) => {
      setTargetIdx(8);
      if (Kategori == "NowPlaying") {
         setCheckedFilter("NowPlaying");
         setSearchData(NowPlayingMovie);
      } else if (Kategori == "UpcomingMovies") {
         setCheckedFilter("UpcomingMovies");
         setSearchData(UpcomingMovies);
      } else if (Kategori == "TopRatedMovies") {
         setCheckedFilter("TopRatedMovies");
         setSearchData(TopRatedMovie);
      } else if (Kategori == "PopularMovies") {
         setCheckedFilter("PopularMovies");
         setSearchData(PopularAllMovie);
      }
   };

   const SearchingData = (e) => {
      e.preventDefault();
      let inputan = e.target.value;
      if (inputan.length != 0) {
         setShowMore(false);
      } else {
         setShowMore(true);
      }
      if (checkedFilter == "NowPlaying") {
         const SearchData = NowPlayingMovie.filter((element) => {
            if (
               element.original_title
                  .toLowerCase()
                  .includes(inputan.toLowerCase())
            ) {
               return element;
            }
         });

         setSearchData(SearchData);
      } else if (checkedFilter == "TopRatedMovies") {
         const SearchData = TopRatedMovie.filter((element) => {
            if (
               element.original_title
                  .toLowerCase()
                  .includes(inputan.toLowerCase())
            ) {
               return element;
            }
         });

         setSearchData(SearchData);
      } else if (checkedFilter == "PopularMovies") {
         const SearchData = PopularAllMovie.filter((element) => {
            if (
               element.original_title
                  .toLowerCase()
                  .includes(inputan.toLowerCase())
            ) {
               return element;
            }
         });

         setSearchData(SearchData);
      } else if (checkedFilter == "UpcomingMovies") {
         const SearchData = UpcomingMovies.filter((element) => {
            if (
               element.original_title
                  .toLowerCase()
                  .includes(inputan.toLowerCase())
            ) {
               return element;
            }
         });

         setSearchData(SearchData);
      }
   };

   console.log(checkedFilter);
   console.log(BannerMovie);

   return (
      <>
         <AnimatePresence>
            {showLottie && <LoadingMovie></LoadingMovie>}
         </AnimatePresence>

         <div>
           {
            BannerMovie &&  <BannerComponent BannerMovie={BannerMovie}></BannerComponent>
           }
            {/* <section className="bg-red-200 w-full h-[650px] relative">
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
                     <div className="font-normal opacity-50 text-[18px]">
                        Kategori 1 | Kategori 1
                     </div>
                  </div>
                  {BannerMovie && (
                     <a className="w-fit" href={`/detail/${BannerMovie.id}`}>
                        <ButtonTextImage Title="Watch Now"></ButtonTextImage>
                     </a>
                  )}
               </div>
            </section> */}
            <section className="bg-[#faf4f4] h-[300px] relative">
               <div
                  className=" grid grid-cols-3 absolute top-[-40%] gap-5 left-1/2 transform -translate-x-1/2 w-[70%]"
                  ref={refDiv}
               >
                  {PopularMovie
                     ? PopularMovie.map((e, index) => {
                          return (
                             <>
                                <motion.a
                                   href={`/detail/${e.id}`}
                                   initial={{ translateY: "100px", opacity: 0 }}
                                   animate={{ translateY: "0px", opacity: 1 }}
                                   transition={{ delay: index * 0.5 }}
                                >
                                   <MovieCardTopThree
                                      Title={e.original_title}
                                      Genres={e.genre_ids}
                                      Image={`https://image.tmdb.org/t/p/w1280${e.poster_path}`}
                                   ></MovieCardTopThree>
                                </motion.a>
                             </>
                          );
                       })
                     : ""}
               </div>
               <div className="absolute bottom-[-5%] w-[25%] left-1/2 transform -translate-x-1/2">
                  <div className="flex flex-col gap-5 ">
                     <div className="flex justify-between ">
                        <div
                           onClick={() => FilterSearchData("NowPlaying")}
                           className={`cursor-pointer ${
                              checkedFilter == "NowPlaying"
                                 ? "text-[#103d5f] font-semibold"
                                 : ""
                           }`}
                        >
                           Now Playing
                        </div>
                        <div
                           onClick={() => FilterSearchData("PopularMovies")}
                           className={`cursor-pointer ${
                              checkedFilter == "PopularMovies"
                                 ? "text-[#103d5f] font-semibold"
                                 : ""
                           }`}
                        >
                           Popular
                        </div>
                        <div
                           onClick={() => FilterSearchData("TopRatedMovies")}
                           className={`cursor-pointer ${
                              checkedFilter == "TopRatedMovies"
                                 ? "text-[#103d5f] font-semibold"
                                 : ""
                           }`}
                        >
                           Top Rated
                        </div>
                        <div
                           onClick={() => FilterSearchData("UpcomingMovies")}
                           className={`cursor-pointer ${
                              checkedFilter == "UpcomingMovies"
                                 ? "text-[#103d5f] font-semibold"
                                 : ""
                           }`}
                        >
                           Upcoming
                        </div>
                     </div>
                     <input
                        type="text"
                        placeholder="Search"
                        className="w-full rounded-[50px] px-4 py-3 outline-[#103d5f] border-none shadow-md"
                        onChange={(e) => SearchingData(e)}
                     ></input>
                  </div>
               </div>
            </section>
            <section className=" px-[15%] pt-[120px]">
               {SearchData && SearchData.length != 0 ? (
                  <div className="grid grid-cols-4 gap-7" ref={refDiv}>
                     {SearchData &&
                        SearchData.map((el, index) => {
                           if (index < TargetIdx) {
                              return (
                                 <motion.a
                                    href={`/detail/${el.id}`}
                                    initial={{
                                       translateY: "100px",
                                       opacity: 0,
                                    }}
                                    animate={{ translateY: "0px", opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                 >
                                    <MovieCardAll
                                       Title={el.original_title}
                                       Years={el.release_date}
                                       Images={`https://image.tmdb.org/t/p/w1280${el.poster_path}`}
                                       Category={el.genre_ids}
                                    ></MovieCardAll>
                                 </motion.a>
                              );
                           }
                        })}
                  </div>
               ) : (
                  <div className="h-[300px] w-full flex justify-center items-center">
                     <div className="text-center flex flex-col gap-2">
                        <img
                           src="/assets/notfound/404-page.png"
                           width={120}
                        ></img>
                        <div>Movie not found</div>
                     </div>
                  </div>
               )}
               <div className="mt-[60px] flex justify-center">
                  <div onClick={() => setTargetIdx(TargetIdx + 8)}>
                     {showMore &&
                        NowPlayingMovie &&
                        TargetIdx < NowPlayingMovie.length && (
                           <ButtonText Title="Show More"></ButtonText>
                        )}
                  </div>
               </div>
            </section>
            <section className="px-[15%] pt-[60px]">
               <div className="flex justify-between">
                  <div className="mb-5 font-semibold text-[24px]">
                     Top Rated
                  </div>
                  <div className="flex gap-3">
                     {TopRatedIDX.firstIDX != 0 && (
                        <div
                           onClick={() =>
                              setTopRatedIDX({
                                 firstIDX: TopRatedIDX.firstIDX - 4,
                                 lastIDX: TopRatedIDX.lastIDX - 4,
                              })
                           }
                        >
                           <ButtonPrev></ButtonPrev>
                        </div>
                     )}
                     <div
                        onClick={() =>
                           setTopRatedIDX({
                              firstIDX: TopRatedIDX.firstIDX + 4,
                              lastIDX: TopRatedIDX.lastIDX + 4,
                           })
                        }
                     >
                        {TopRatedMovie &&
                        TopRatedIDX.firstIDX + 4 < TopRatedMovie.length ? (
                           <ButtonNext></ButtonNext>
                        ) : (
                           ""
                        )}
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-4 gap-7">
                  {TopRatedMovie &&
                     TopRatedMovie.map((Element, idx) => {
                        if (
                           idx >= TopRatedIDX.firstIDX &&
                           idx < TopRatedIDX.lastIDX
                        ) {
                           return (
                              <a href={`/detail/${Element.id}`}>
                                 <MovieCardAll
                                    Title={Element.original_title}
                                    Years={Element.release_date}
                                    Images={`https://image.tmdb.org/t/p/w1280${Element.poster_path}`}
                                    Category={Element.genre_ids}
                                 ></MovieCardAll>
                              </a>
                           );
                        }
                     })}
               </div>
            </section>
            <section className="px-[15%] pt-[60px]">
               <div className="flex justify-between">
                  <div className="mb-5 font-semibold text-[24px]">Upcoming</div>
                  <div className="flex gap-3">
                     {UpcomingIDX.firstIDX != 0 && (
                        <div
                           onClick={() =>
                              setUpcomingIDX({
                                 firstIDX: UpcomingIDX.firstIDX - 4,
                                 lastIDX: UpcomingIDX.lastIDX - 4,
                              })
                           }
                        >
                           <ButtonPrev></ButtonPrev>
                        </div>
                     )}
                     <div
                        onClick={() =>
                           setUpcomingIDX({
                              firstIDX: UpcomingIDX.firstIDX + 4,
                              lastIDX: UpcomingIDX.lastIDX + 4,
                           })
                        }
                     >
                        {UpcomingMovies &&
                        UpcomingIDX.firstIDX + 4 < UpcomingMovies.length ? (
                           <ButtonNext></ButtonNext>
                        ) : (
                           ""
                        )}
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-4 gap-7">
                  {UpcomingMovies &&
                     UpcomingMovies.map((Element, idx) => {
                        if (
                           idx >= UpcomingIDX.firstIDX &&
                           idx < UpcomingIDX.lastIDX
                        ) {
                           return (
                              <a href={`/detail/${Element.id}`}>
                                 <MovieCardAll
                                    Title={Element.original_title}
                                    Years={Element.release_date}
                                    Images={`https://image.tmdb.org/t/p/w1280${Element.poster_path}`}
                                    Category={Element.genre_ids}
                                 ></MovieCardAll>
                              </a>
                           );
                        }
                     })}
               </div>
            </section>
            <section className="footer h-[400px] mt-[120px] bg-[#faf4f4] px-[15%] py-[100px]">
               <div className="px-[10%] text-center">
                  <div className="Header text-[25px] mb-3">BLUMovies</div>
                  <div className="sm:text-[18px] text-[14px] sm:text-center text-justify">
                     BLUMovies adalah layanan aliran video atas permintaan
                     berbasis langganan yang berasal dari Amerika Serikat.
                     Layanan ini menawarkan beragam film dan acara televisi,
                     termasuk produksi orisinal dan yang diperoleh dari pihak
                     lain, yang mencakup berbagai genre dan tersedia dalam
                     banyak bahasa secara internasional
                  </div>
                  <div className="mt-10 flex justify-center sm:gap-[5%] gap-[13%]">
                     <img
                        src="/assets/footerAssets/twitter.png"
                        width={30}
                        whileHover={{ scale: 1.1 }}
                        className="cursor-pointer"
                     ></img>
                     <img
                        src="/assets/footerAssets/gmail.png"
                        width={30}
                        whileHover={{ scale: 1.1 }}
                        className="cursor-pointer"
                     ></img>
                     <img
                        src="/assets/footerAssets/whatsapp.png"
                        width={30}
                        whileHover={{ scale: 1.1 }}
                        className="cursor-pointer"
                     ></img>
                     <img
                        src="/assets/footerAssets/youtube.png"
                        width={30}
                        whileHover={{ scale: 1.1 }}
                        className="cursor-pointer"
                     ></img>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
}
