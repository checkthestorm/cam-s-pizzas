import { easeOut, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../services/UISlice";

function MobileNavMenu () {
    const dispatch = useDispatch()
    function handle () {
        dispatch(toggleMenu())
    }

    return(
        <motion.div className="h-full p-4 bg-yellow-500" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, ease: easeOut}} exit={{opacity: 0}}>
            <ul className="text-2xl font-bold">
                <li><Link to={'/'} onClick={handle}>Home</Link></li>
                <li><Link to={'/menu'} onClick={handle}>Menu</Link></li>
                <li><Link to={'/cart'} onClick={handle}>Cart</Link></li>
            </ul>
        </motion.div>
    )
}

export default MobileNavMenu