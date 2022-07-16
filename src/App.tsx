import {useState} from 'react'
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Users from "./pages/Users/Users";
import Chat from "./pages/Chat/Chat";

const App = () => {
  const [isAuth, setIsAuth] = useState(true)

  if (!isAuth) {
    return <Login/>
  }

  return <div className='app container'>
    <Header/>

    <div>

    </div>
    <Routes>
      <Route path='/profile/:id' element={<Profile/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/chat' element={<Chat/>}/>

      <Route path='*' element={<Profile/>}/>
    </Routes>
  </div>
}

export default App