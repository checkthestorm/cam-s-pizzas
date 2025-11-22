import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import IconsMenu from "./IconsMenu"
import DesktopNavMenu from "./DesktopNavMenu"
import { useEffect, useState } from "react"

function Header () {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const {username} = useSelector((store) => store.user)
    console.log(window.innerWidth)

    useEffect(() => {
      function setWidthVal () {
        setWindowWidth(window.innerWidth)
      }

      window.addEventListener("resize", setWidthVal)
    }, [])

  return (
    <header className="bg-yellow-500 flex justify-between items-center p-4">
        <p className="font-semibold tracking-widest uppercase">
            <Link to={'/'}>cam's pizzas</Link>
        </p>

        <p className="hidden sm:block">{username}</p>

        {windowWidth > 450 ? <DesktopNavMenu /> : <IconsMenu />}
    </header>
  )
}

export default Header