import './Register.css'
import { useState } from 'react'
import Lottie from 'lottie-react'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { BeatLoader } from 'react-spinners'
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import animation  from '../../../public/animation/AnimationLogo.json'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";


const Register = () => {
  // variables declaration
  const [show, setShow]                       = useState(false)
  const [confirmShow, setConfirmShow]         = useState(false)
  const [userName, setUser]                   = useState()
  const [usererr, setUsererr]                 = useState()
  const [email, setEmail]                     = useState()
  const [emailerr, setEmailerr]               = useState()
  const [password, setPassword]               = useState()
  const [passerr, setPasserr]                 = useState()
  const [passConfirm, setPassConfirm]         = useState()
  const [passConfirmErr, setPassConfirmErr]   = useState()
  const navigate                              = useNavigate()



  // ===================================== firebase part  ================================
    // firebase auth
    const auth                   = getAuth();
    const [loading, setLoading]  = useState(false)





  // ===================================== firebase part end ================================
      //password  Icon
      const handleIcon = () => {
        setShow(!show)
      }

      // confirm password Icon
      const handleConfirmIcon = () => {
        setConfirmShow(!confirmShow)
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
      const handleConfirm = (e) =>{
        setPassConfirm(e.target.value)
        setPassConfirmErr('')
      }

      // form validation
     const handleSubmit = (e) => {
        e.preventDefault();

        // condition
        if (!userName) {
          setUsererr('User Name is required.');
        } else if (!email) {
          setEmailerr('Email is required.');
        } else if (!password) {
          setPasserr('Password is required.');
        } else if (!passConfirm) {
          setPassConfirmErr('Confirm Password is required.');
        } else if(password !== passConfirm) {
          setPassConfirmErr('Passwords do not match.');
        }else {
          // set loading 
          setLoading(true)


          // firebase create user with email and confirm password
          createUserWithEmailAndPassword(auth, email, passConfirm)

          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;

            // .............Update a user's profile.................
            updateProfile(auth.currentUser, {
              displayName: userName,
              photoURL:"https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=600"
            })

          
            // .............Toast message .................
            toast.success('Varify Your Email', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Bounce,
            });

           // set loading 
            setLoading(false)
            
            // .............Redirect to login page.................
            setTimeout(() => {
              navigate('/login');
            }, 2000); // 3 seconds delay to match the autoClose time

          sendEmailVerification(auth.currentUser)
              
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            // .............Toast message .................
            if (errorCode === "auth/weak-password") {
                toast.error('Please select a strong password', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            } else if (errorCode === 'auth/email-already-in-use') {
                toast.error('Email already in use', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            } else {
                toast.error('An error occurred: ' + errorMessage, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }

             // set loading 
             setLoading(false)
        });
        
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
                            confirmShow?
                            <IoIosEye onClick={handleConfirmIcon}  className='absolute top-[20%] right-[30px] font-sans text-[24px] text-black'/>
                            :
                            <IoIosEyeOff onClick={handleConfirmIcon}  className='absolute top-[20%] right-[30px] font-sans text-[24px] text-black'/>
                          }
                           <input onChange={handleConfirm} type={confirmShow? "text" : "password" } id="confirm" name="confirm"/>
                        </div>
                        <p className="text-[14px] text-red-600 font-sans font-normal">{passConfirmErr}</p>
                    </div>

                   {/* LogIn Button */}
                    {
                      loading?
                      <div className='font-sans font-black text-[26px] text-white w-[330px] h-[47px] p-1 bg-[#5C7BE0] text-center rounded-[8px] transition ease-linear delay-100 hover:bg-[#4a68c4] flex justify-center items-center mt-4'>
                        <BeatLoader color='white' />
                      </div>
                      :
                      <div className='flex justify-center mt-4'>
                        <button className='font-sans font-semibold ease-out duration-300 text-[26px] text-white w-[330px] p-1 bg-[#5C7BE0] text-center rounded-[8px] hover:bg-[#9B59B6] hover:shadow-lg  active:bg-[#7D3C98]' type='submit'>
                          Register
                        </button>
                      </div>
                    }


                    {/* Link to Register  */}
                    <div className='flex justify-center mt-4'>
                       <Link className='font-sans font-normal text-[18px] text-[#8f91df]' to='/login'>Don't have   an account? <span className='text-[#5d3ff2] font-semibold'>LogIn</span></Link>
                    </div>
                  </form>
                </div>
              </div>
           </div>
          </div>
           {/*.....ToastConatiner.... */}
          <ToastContainer />
       </div>
    </>
  )
}

export default Register
