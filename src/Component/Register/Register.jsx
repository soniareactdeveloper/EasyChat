import './Register.css'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
import animation  from '../../../public/animation/AnimationLogo.json'
import { useState } from 'react'
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";


const Register = () => {
  // variables declaration
  const [show, setShow]                       = useState(false)
  const [user, setUser]                       = useState()
  const [usererr, setUsererr]                 = useState()
  const [email, setEmail]                     = useState()
  const [emailerr, setEmailerr]               = useState()
  const [password, setPassword]               = useState()
  const [passerr, setPasserr]                 = useState()
  const [emailConfirm, setEmailConfirm]       = useState()
  const [emailConfirmErr, setEmailConfirmErr] = useState()



      // Icon
      const handleIcon = () => {
        setShow(!show)
      }

      // user
      const handleUser = (e) =>{
        setUser(e.target.value)
        setUsererr('')
      }

      // email
      const handleEmail = (e) =>{
        setEmail(e.target.value)
        setEmailerr('')
      }

      // password
      const handlePassword = (e) =>{
        setPassword(e.target.value)
        setPasserr('')
      }
      
      // confirm password
      const handleEmailConfirm = (e) =>{
        setEmailConfirm(e.target.value)
        setEmailConfirmErr('')
      }

      // form validation
     const handleSubmit = (e) => {
        e.preventDefault();

        // condition
        if (!user) {
          setUsererr('User Name is required.');
        } else if (!email) {
          setEmailerr('Email is required.');
        } else if (!password) {
          setPasserr('Password is required.');
        } else if (!emailConfirm) {
          setEmailConfirmErr('Confirm Password is required.');
        } else {
          console.log("submit");
        }
  }
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
                  <form onSubmit={handleSubmit} className='mt-3'>

                    {/*  user  */}
                  <div>
                     <label  htmlFor="user">User Name</label>
                      <br />
                      <input onChange={handleUser} type="text" id="user" name="user"/>
                      <p className="text-[14px] text-red-600 font-sans font-normal">{usererr}</p>
                  </div>

                     {/* email  */}
                     <div className='mt-3'>
                        <label  htmlFor="email">Email</label>
                        <br />
                        <input onChange={handleEmail} type="text" id="email" name="email"/>
                        <p className="text-[14px] text-red-600 font-sans font-normal">{emailerr}</p>
                      </div>


                    {/* password */}
                    <div className='mt-3'>
                        <label  htmlFor="pass">Password</label>
                        <br />
                        <div className='relative'>
                          {
                            show?
                            <IoIosEye onClick={handleIcon}  className='absolute top-[20%] right-[30px] font-sans text-[24px] text-black'/>
                            :
                            <IoIosEyeOff onClick={handleIcon}  className='absolute top-[20%] right-[30px] font-sans text-[24px] text-black'/>
                          }
                           <input onChange={handlePassword} type={show? "text" : "password" } id="pass" name="pass"/>
                        </div>
                        <p className="text-[14px] text-red-600 font-sans font-normal">{passerr}</p>
                    </div>

                    {/* Confirm password */}
                    <div className='mt-3'>
                        <label   htmlFor="confirm">Confirm Password</label>
                        <br />
                        <div className='relative'>
                          {
                            show?
                            <IoIosEye onClick={handleIcon}  className='absolute top-[20%] right-[30px] font-sans text-[24px] text-black'/>
                            :
                            <IoIosEyeOff onClick={handleIcon}  className='absolute top-[20%] right-[30px] font-sans text-[24px] text-black'/>
                          }
                           <input onChange={handleEmailConfirm} type={show? "text" : "password" } id="confirm" name="confirm"/>
                        </div>
                        <p className="text-[14px] text-red-600 font-sans font-normal">{emailConfirmErr}</p>
                    </div>

                    {/* LogIn Button */}
                    <div className='flex justify-center mt-4'>
                     <button className='font-sans font-semibold text-[26px] text-white w-[330px] p-1 bg-[#5C7BE0] text-center rounded-[8px] hover:bg-[#4a68c4] active:scale-50' type='submit'>Register </button>
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