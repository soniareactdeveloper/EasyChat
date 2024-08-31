import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'
import './App.css'
import LogInPage from './Pages/LogInPage'
import RegisterPage from './Pages/RegisterPage'
import ForgetPage from './Pages/ForgetPage'
import NotFound from './Pages/NotFound'

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/'         element={<LogInPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/forget"   element={<ForgetPage/>}/>
        <Route path='*'         element={<NotFound/>}/>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={route} />
    </>
  )
}

export default App
