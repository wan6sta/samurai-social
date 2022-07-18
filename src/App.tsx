import {useRef, useState} from 'react'
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Users from "./pages/Users/Users";
import Chat from "./pages/Chat/Chat";
import Navigation from "./components/Navigation/Navigation";

const App = () => {
  const [isAuth, setIsAuth] = useState(true)
  const headerRef = useRef()

  if (!isAuth) {
    return <Login/>
  }

  return <div className='app container'>
    <Header/>

    <div className='main'>
      <Navigation/>

      <Routes>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/chat' element={<Chat/>}/>

        <Route path='*' element={<Profile/>}/>
      </Routes>
    </div>
  </div>
}

export default App