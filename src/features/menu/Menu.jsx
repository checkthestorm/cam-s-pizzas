import { useLoaderData } from "react-router-dom"
import { getData } from "../../services/kitchen"
import Beans from "./Beans"
import { getPasta } from "../../services/supabase/supa_pasta"
import { easeInOut, motion } from "framer-motion"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

// import { menu } from "framer-motion/client"

function Menu () {
    const {username} = useSelector((store) => store.user)
    let menu = [];

    if (username) {
        menu = useLoaderData()
    }

    const number = menu.length
    console.log(number)

        return(
        <>
            {number > 0 ? (<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.4, ease: easeInOut}} className="px-4">
                <ul className="flex flex-col gap-2 divide-y divide-stone-300">
                    {menu.map((obj) => <Beans beans={obj} key={obj.id} />)}
                </ul>
            </motion.div>): <div className="h-full bg-yellow-500 w-full p-4">
                <p className="mb-2 font-bold">You need to log in to view the menu.</p>
                <Link to={'/'}>home &rarr;</Link>
                </div>}
        </>
        )
}

export async function loader () {
    const data = await getPasta()
    return data
}

export default Menu