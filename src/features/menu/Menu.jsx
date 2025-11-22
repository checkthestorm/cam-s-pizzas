import { useLoaderData } from "react-router-dom"
import { getData } from "../../services/kitchen"
import Beans from "./Beans"
import { getPasta } from "../../services/supabase/supa_pasta"
import { easeInOut, motion } from "framer-motion"

function Menu () {
    const menu = useLoaderData()
    console.log(menu)
        return(
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.4, ease: easeInOut}} className="px-4">
                <ul className="flex flex-col gap-2 divide-y divide-stone-300">
                    {menu.map((obj) => <Beans beans={obj} key={obj.id} />)}
                </ul>
            </motion.div>
        )
}

export async function loader () {
    const data = await getPasta()
    return data
}

export default Menu