import "./Body.css"
import BodyOptions from "./Body Header/BodyOptions";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UpdateIcon from '@mui/icons-material/Update';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BodyComponent from "./Body Components/BodyComponent";
import Messages from "./Messages/Messages";
import { useDispatch, useSelector} from "react-redux";
import { scrollDeactivated } from "../../Redux/scrollSlice";
import { db } from "../../firebase";
import { useEffect, useState } from "react";


const Body = () => {
    const [email, setEmail] = useState([])

    const truncate = (str) => {
        return (
            str.length > 14? str.substring(0,14) + "." : str
        )
    }

   
    useEffect(()=> {
        db.collection("email").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
            setEmail(snapshot.docs.map((doc)=> ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    const scrolling = useSelector((state) => state.scroll.scrollActive)

    const dispatch = useDispatch()


    return ( 
        <div className={"body__body"}>
            <div className="body__top" >
                <div className={scrolling? "top__icons" : "top__icons"}>
                    <div className="topIcon__one">
                        <BodyOptions Icon={CheckBoxOutlineBlankIcon} smallSpace={true}/>
                        <BodyOptions Icon={ArrowDropDownIcon} smallSpace={true} />
                    </div>
                    <div className="topIcon__two">
                        <BodyOptions Icon={UpdateIcon} />
                        <BodyOptions Icon={MoreVertIcon} />
                    </div>
                    <div className="body__right">
                        <div className="digits">
                            <IconButton className="digitButton">
                                <h4>1-50 of 8,187</h4>
                            </IconButton>
                        </div>
                        <div className="arrows">
                            <IconButton>
                                <KeyboardArrowLeftIcon className="arrow" />
                            </IconButton>
                            <IconButton>
                                <KeyboardArrowRightIcon className="arrow" />
                            </IconButton>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className="middle__heading">
                <BodyComponent />
            </div>
            <div className={"messages"} onMouseOver={()=> dispatch(scrollDeactivated())} >
                {email.map(({id, data: {to, subject, message, timestamp}})=> {
                    return (
                        <div className="containerr__message">
                            <Messages id={id} key={id} title={truncate(to)} subject={subject} message={message} time={new Date(timestamp?.seconds * 1000).toUTCString()} />
                        </div>
                    )
                })}
                
            </div>
            
        </div>
     );
}
 
export default Body;