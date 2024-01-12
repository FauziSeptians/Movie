import { motion } from "framer-motion";

export default function LoadingMovie() {
   return (
      <section className="fixed z-10 h-screen w-full bg-[#000000df] flex justify-center items-center">
         <motion.div
            className=""
            initial={{ translateX: "200px", opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            exit={{ translateX: "200px", opacity: 0 }}
         >
            <img src="/assets/lottie/loading.png" width={200}></img>
         </motion.div>
      </section>
   );
}
