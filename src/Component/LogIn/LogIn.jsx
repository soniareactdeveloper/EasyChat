import './LogIn.css'
import { useState } from 'react'
import Lottie from 'lottie-react'
import { useDispatch} from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
import { userData } from '../../Slice/UserDataSlice';
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import animation  from '../../../public/animation/AnimationLogo.json'
import { getDatabase, ref, set } from "firebase/database";

const LogIn = () => {
  // declare variables 
  const [show , setShow]               = useState(false)
  const [loading, setLoading]          = useState(false)
  const [email, setEmail]              = useState()
  const [emailerr, setEmailerr]        = useState()
  const [password, setPassword]        = useState()
  const [passerr, setPasserr]          = useState()
  const navigate                       = useNavigate()
  // react-redux variables
  const dispatch                       = useDispatch()
  
  
  // ===================================== firebase part  ================================
  // firebase auth
  const auth                           = getAuth();
  const db                             = getDatabase();





  // ===================================== firebase part end ================================

     
  //password  Icon
  const handleIcon = ()  =>{
    setShow(!show)
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


  // form validation
  const handleSubmit = (e) =>{
    e.preventDefault()
    
    // condition
    if(!email){
      setEmailerr('Please enter your email')
    }if(!password){
      setPasserr('Please enter your password')
    }else{
      // .....................Loading 
      setLoading(true)


      // firebase create user with email and confirm password
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        // Signed in 
        const user = userCredential.user;

        
        // .................... Toast message ......................
        if(!user.emailVerified) {
          toast.error('Please Varify Your Email', {
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
        }else {
          toast.success('Log in Successful', {
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

            // sending data 
            dispatch(userData(user))
        }
         
        // saving data in the local storage
        
        localStorage.setItem('userData', JSON.stringify(user))
         

           // .....................Loading 
           setLoading(false)

          //  console
          console.log(user)

          // navigate to home page
          setTimeout(() => {
            navigate('/');
          }, 1000); 

          // set user data to database
          set(ref(db, 'Allusers/' + user.uid), {
            userName: user.displayName,
            userPhoto: user.photoURL,
            userId: user.uid
          })
      })
      .catch((error) => {
         // .....................Loading 
        setLoading(false)
        const errorCode = error.code;
        const errorMessage = error.message;

        // .................... Toast message ......................
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
      });
        
    }
  }
  






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
                  <form onSubmit={handleSubmit} className='mt-8'>

                    {/* email  */}
                    <label htmlFor="email">Email</label>
                    <br />
                    <input onChange={handleEmail} type="text" id="email" name="email"/>
                    <p className="text-[14px] text-red-600 font-sans font-normal">{emailerr}</p>

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
                    {/* ========================= spinner ====================== */}
                   {
                     loading?
                      <div className='font-sans font-black text-[26px] text-white w-[330px] h-[47px] p-1 bg-[#5C7BE0] text-center rounded-[8px] transition ease-linear delay-100 hover:bg-[#4a68c4] flex justify-center items-center mt-4'>
                        <BeatLoader color='white' />
                      </div>
                      :
                      <div className='flex justify-center mt-4'>
                        <button className='font-sans font-black text-[26px] text-white w-[330px] p-1 bg-[#5C7BE0] text-center rounded-[8px] transition ease-linear delay-100 hover:bg-[#4a68c4]' type='submit'>
                          LogIn
                        </button>
                      </div>

                   }


                    {/* Link to Register  */}
                    <div className='flex justify-center mt-4'>
                       <Link className='font-sans font-normal text-[18px] text-[#8f91df]' to='/register'>Don't have   an account? <span className='text-[#5d3ff2] font-semibold'>Register</span></Link>
                    </div>
                  </form>
                </div>
              </div>
           </div>
          </div>
          <ToastContainer />
       </div>
    </>
  )
}

export default LogIn