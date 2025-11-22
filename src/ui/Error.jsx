import { useRouteError } from "react-router-dom"
// import errorImage from "../../public/errorImage.jpg"
import { motion, AnimatePresence, animate, scale } from "framer-motion"

function Error () {
    const error = useRouteError()

    return (
        // <section className="h-full flex justify-center items-center">
        //     <div className="py-8 px-10 border border-yellow-500 rounded">
        //         <h1 className="text-lg sm:text-xl font-bold">{error.data || error.message}</h1>
        //     </div>
        // </section>
        <motion.div initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} className="bg-yellow-500 m-auto p-12 w-30">
            <p>going through the motions.</p>
        </motion.div>
    )
}

export default Error