import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'
import './App.css'
import LogInPage from './Pages/LogInPage'
import RegisterPage from './Pages/RegisterPage'
import ForgetPage from './Pages/ForgetPage'
import NotFound from './Pages/NotFound'
import { ToastContainer } from 'react-toastify'
import LayoutOne from './Layouts/LayoutOne'
import HomePage from './Pages/HomePage'
import { database } from './firebase.Config'
import UserCardPage from './Pages/UserCardPage'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login'    element={<LogInPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/forget"   element={<ForgetPage/>}/>
        <Route path='/'         element={<LayoutOne/>}>
           <Route index         element={<HomePage/>}/>
           <Route path='/card'  element={<UserCardPage/>}/>
        </Route>
        <Route path='*'         element={<NotFound/>}/>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={route} />
     <ToastContainer />
    </>
  )
}

export default App
