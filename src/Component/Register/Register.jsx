import './Register.css'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
import animation  from '../../../public/animation/AnimationLogo.json'

const Register = () => {
  return (
    <>
       <div className="main">
          <div className="w-[850px] h-[550px] bg-[#CDDBF9] rounded-md">
           <div className='flex gap-5'>
              {/* lottie files */}
              <div className="lottie w-[450px] h-[450px]">
                  <Lottie animationData={animation } loop={true} />
              </div>

              {/* login form */}
              <div>
                <div className="mt-3">
                  <h1 className='font-sans font-bold text-[44px] text-[#5C7BE0] text-center'>Create Account</h1>
                  {/* form */}
                  <form className='mt-3'>

                    {/*  user  */}
                  <div>
                     <label  htmlFor="user">User Name</label>
                      <br />
                      <input type="text" id="user" name="user"/>
                  </div>

                     {/* email  */}
                     <div className='mt-3'>
                        <label  htmlFor="email">Email</label>
                        <br />
                        <input type="text" id="email" name="email"/>
                      </div>


                    {/* password */}
                    <div className='mt-3'>
                        <label  htmlFor="pass">Password</label>
                        <br />
                        <input type="password" id="pass" name="pass"/>
                    </div>

                    {/* Confirm password */}
                    <div className='mt-3'>
                        <label   htmlFor="confirm">Confirm Password</label>
                        <br />
                        <input type="password" id="confirm" name="confirm"/>
                    </div>

                    {/* LogIn Button */}
                    <div className='flex justify-center mt-4'>
                    <Link className='font-sans font-semibold text-[26px] text-white w-[330px] p-1 bg-[#5C7BE0] text-center rounded-[8px] hover:bg-[#4a68c4] active:scale-50' to="/home">Register </Link>
                    </div>

                    {/* Link to Register  */}
                    <div className='flex justify-center mt-4'>
                       <Link className='font-sans font-normal text-[18px] text-[#8f91df]' to='/'>Don't have   an account? <span className='text-[#5d3ff2] font-semibold'>LogIn</span></Link>
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

export default Register