import './App.css';
import Body from './Components/Body/Body';
import NavBar from './Components/NavBar/NavBar';
import SideBar from './Components/SideBar/SideBar.js';
import Compose from './Components/Body/Compose/Compose';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MailContent from './Components/Body/MailContent/MailContent';
import LoginPage from './Components/Pages/LoginPage';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { login, logout } from './Redux/userSlice';
import SideBar2 from './Components/SideBar/sideBar2';


function App() {
  const dispatch = useDispatch()
  const scrolling = useSelector((state) => state.scroll.scrollActive)
  const composeMail = useSelector((state) => state.mail.openCompose)
  const user = useSelector((state) => state.user.user)

  const [menu, setMenu] = useState(false)

  useEffect(()=> {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          potoUrl: user.potoURL
        }))
      } else{
        dispatch(logout())
      }
    })
  }, [])

  return (
    <BrowserRouter>
      {!user ? (
        <LoginPage />
      ) : (
        <div className={ "app"}>
          <NavBar menuClicked={()=>setMenu(!menu)} />
          <div className={'body'}>
            <SideBar menuIcon={menu}/>
            <SideBar2 menuIcon={menu} menuClicked={()=>setMenu(!menu)}/>
            <Routes>
              <Route path="/" element={<Body menuIcon={menu}/>} />
              <Route path="/mail-content" element={<MailContent menuIcon={menu}/>} />
            </Routes>

          </div>
          {composeMail && <Compose />}
          <div className='app__container'></div>
          {console.log(menu)}

        </div>
      )}

    </BrowserRouter>

  );
}

export default App;
