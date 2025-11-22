import { useSelector } from 'react-redux'
import CreateUser from '../features/user/CreateUser'
import RegisterNewUser from '../features/user/RegisterNewUser'
import { useState } from 'react'

function Home () {
  const {signUp} = useSelector((store) => store.user)
  const [refresh, setRefresh] = useState(0)

  function refreshFunc () {
      setRefresh((sta) => sta + 1)
    }

  return (
    <div className='text-center mt-10 px-4'>
    {/* <div className='bg-linear-to-br from-blue-700 via-blue-800 to-gray-900 text-center h-full'> */}
      <h1 className="text-yellow-500 text-xl sm:text-2xl text-center font-semibold">We have selected all the best pizzas. <span className="text-stone-800">To be delivered to you.</span></h1>
        {signUp ? <RegisterNewUser refresh={refreshFunc} key={refresh} /> : <CreateUser />}
    </div>
  )
}

export default Home