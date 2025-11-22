import { motion } from "framer-motion"
import { Link } from "react-router-dom"
function DesktopNavMenu () {
    return(
        <motion.ul className="flex gap-6 font-semibold text-stone-600">
            <motion.li whileHover={{y: 0.5, x: 0.3}} transition={{duration: 0.2}}>
                <Link to={"/"}>home</Link>
            </motion.li>
            <motion.li whileHover={{y: 0.5, x: 0.3}} transition={{duration: 0.2}}>
                <Link to={"/menu"}>menu</Link>
            </motion.li>
            <motion.li whileHover={{y: 0.5, x: 0.3}} transition={{duration: 0.2}}>
                <Link to={"/cart"}>cart</Link>
            </motion.li>
        </motion.ul>
    )
}

export default DesktopNavMenu