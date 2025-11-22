import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../services/UISlice"
import {motion} from "framer-motion"

function IconsMenu () {
    const dispatch = useDispatch()
    const {menuToggle} = useSelector((state) => state.UI)

    function toggleMenuIcon() {
        dispatch(toggleMenu())
    }

    return(
        !menuToggle ? (<motion.svg initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.4}} onClick={toggleMenuIcon} className="w-6 h-6 text-stone-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
        </motion.svg>) : (<motion.svg initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.4}} onClick={toggleMenuIcon} className="w-6 h-6 text-stone-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
</motion.svg>)
    )
}
// class="w-6 h-6 text-gray-800 dark:text-white"
export default IconsMenu