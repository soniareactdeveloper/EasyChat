import { Link } from "react-router-dom"
import Lottie from 'lottie-react'
import Forgetanimation  from '../../../public/animation/forgetAni.json'

const Forget = () => {
  return (
    <>
    <div className="main">
       <div className="w-[850px] h-[500px] bg-[#b9c6d4] rounded-md">
        <div className='grid  grid-cols-2'>
           {/* lottie files */}
           <div className="lottie w-[500px] ml-[-10px] mt-[90px]">
               <Lottie animationData={Forgetanimation} loop={true} />
           </div>

           {/* login form */}
           <div>
             <div className="mt-12">
               <h1 className='font-sans font-bold text-[36px] text-[#5C7BE0] ml-12'>Forget <span className="block">Your Password?</span></h1>
               {/* form */}
               <form className='mt-8'>

                    {/* email  */}
                     <div className="ml-12">
                        <label htmlFor="email">Email</label>
                        <br />
                        <input className="text-white" type="text" id="email" name="email"/>
                     </div>
                    {/* Forget Button */}
                    <div className='flex justify-center mt-4'>
                    <Link className='font-sans font-black text-[26px] text-white w-[330px] p-1 bg-[#5C7BE0] text-center rounded-[8px] hover:bg-[#4a68c4] active:scale-50' to="/home">Reset </Link>
                    </div>

                 {/* Link to Register  */}
                 <div className='flex justify-center mt-4'>
                    <Link className='font-sans font-normal text-[18px] text-[#393a79]' to='/'>Back to  <span className='text-[#5d3ff2] font-semibold'>LOGIN</span></Link>
                 </div>
               </form>
             </div>
           </div>
        </div>
       </div>
    </div>
  </>
  )
}

export default Forget


                  
