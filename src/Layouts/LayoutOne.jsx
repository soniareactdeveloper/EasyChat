import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../Component/Navbar/Navbar"


const LayoutOne = () => {
 // getting data from redux
 const sliceUser = useSelector((state)=> state.counter.value)
 const navigate  = useNavigate()

  // rendering the component based on the data
    useEffect(()=>{
      
      if(sliceUser == null){
        navigate('/login')  // navigate to login page if the user data is null
      }
    },[])

  return (
    <>
      <div className="flex gap-7">
        <Navbar/>
        <Outlet/>
      </div>

    </>
  )
}

export default LayoutOne
