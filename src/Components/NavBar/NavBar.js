import "./NavBar.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { scrollActivated } from "../../Redux/scrollSlice";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
    const scrolling = useSelector((state) => state.scroll.scrollActive)

    const dispatch = useDispatch()

    const [enterInput, setEnterInput] = useState(null)
    const [inputClicked, setInputClicked] = useState(false)

    const clickRef = useRef(null)

    useEffect(() => {
        const clickHandler = (e) => {
            if (!clickRef.current.contains(e.target)) {
                setInputClicked(false)
            }
        }
        document.addEventListener("click", clickHandler)

        return () => {
            document.removeEventListener("click", clickHandler)
        }
    })


    return ( 
        <div className={scrolling?"navBar":"navBar"} onMouseOver={() => dispatch(scrollActivated())}>
            <div className="navBar__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img  className="navBar__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" alt="gmail logo" onClick={()=> navigate("/")} />  
            </div>
            <div ref={clickRef} className={inputClicked? "navBar__middle2" : "navBar__middle"}>
                <IconButton>
                    <SearchIcon className="searchIcon"/>
                </IconButton>
                <input value={enterInput} className={inputClicked? "input2" : "input"} type="text" placeholder="Search mail" onChange={(e)=>setEnterInput(e.target.value)} onClick={()=>setInputClicked(true)}/>
                <IconButton className={!enterInput? "closeIcon2" : "closeIcon"} onClick={()=>setEnterInput("")}>
                    <CloseIcon className="close"/>
                </IconButton>
                <IconButton >
                    <ListIcon className="listIcon"/>
                </IconButton>
            </div>
            <div className="navBar__right">
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <Avatar className="avatar">R</Avatar>
                </IconButton>
            </div>
        </div>
     );
}
 
export default NavBar;