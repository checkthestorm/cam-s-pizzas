import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Header () {
    const {username} = useSelector((store) => store.user)

  return (
    <header className="bg-yellow-500 flex justify-between items-center p-4">
        <p className="font-semibold tracking-widest uppercase">
            <Link to={'/'}>cam's pizzas</Link>
        </p>

        <p className="hidden sm:block">{username}</p>
    </header>
  )
}

export default Header