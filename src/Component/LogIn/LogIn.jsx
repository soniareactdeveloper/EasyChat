import './LogIn.css'
import Lottie from 'lottie-react'
import animation  from '../../../public/animation/AnimationLogo.json'
import { Link } from 'react-router-dom'

const LogIn = () => {
  return (
    <>
       <div className="main">
          <div className="w-[850px] h-[500px] bg-[#CDDBF9] rounded-md">
           <div className='flex gap-5'>
              {/* lottie files */}
              <div className="lottie w-[450px] h-[450px]">
                  <Lottie animationData={animation } loop={true} />
              </div>

              {/* login form */}
              <div>
                <div className="mt-4">
                  <h1 className='font-sans font-bold text-[64px] text-[#5C7BE0] text-center'>LogIn</h1>
                  {/* form */}
                  <form className='mt-8'>

                    {/* email  */}
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" id="email" name="email"/>

                    {/* password */}
                    <div className='mt-3'>
                        <label  htmlFor="pass">Password</label>
                        <br />
                        <input type="password" id="pass" name="pass"/>
                    </div>

                    <div className='flex items-center justify-between'>
                      {/* remember me */}
                      <div className='mt-3 flex gap-1'>
                          <input className='w-[15px] shadow-none' type="radio" id="remember" name="remember"/>
                          <label className='font-sans font-normal text-lg text-[#927AFC]' htmlFor="remember">Remember Me</label>
                      </div>

                      {/* forget password */}
                      <Link className='mt-3 text-[#3739b9] font-sans font-normal text-[16px]' to='/forget'>Forget Password?</Link>
                    </div>



                    {/* LogIn Button */}
                    <div className='flex justify-center mt-4'>
                    <Link className='font-sans font-black text-[26px] text-white w-[330px] p-1 bg-[#5C7BE0] text-center rounded-[8px] hover:bg-[#4a68c4] active:scale-50' to="/home">LogIn </Link>
                    </div>

                    {/* Link to Register  */}
                    <div className='flex justify-center mt-4'>
                       <Link className='font-sans font-normal text-[18px] text-[#8f91df]' to='/register'>Don't have   an account? <span className='text-[#5d3ff2] font-semibold'>Register</span></Link>
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

export default LogIn