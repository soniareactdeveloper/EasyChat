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

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/login'    element={<LogInPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/forget"   element={<ForgetPage/>}/>
        <Route path='*'         element={<NotFound/>}/>
        <Route path='/'         element={<LayoutOne/>}>
           <Route index         element={<HomePage/>}/>
        </Route>
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
