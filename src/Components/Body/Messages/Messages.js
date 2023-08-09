import { IconButton } from "@mui/material";
import "./Messages.css"
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../../../Redux/mailSlice";

const Messages = ({title, subject, message, time, todayTime}) => {
    const [hover, setHover] = useState(false)
    const navigate = useNavigate()


    const dispatch = useDispatch()

    const openMail = () => {
        dispatch(selectMail({
            title,
            subject,
            message, 
            time,
            todayTime
        }))

        navigate("/mail-content")
    }
    

    const reference = useRef(null)

    useEffect(() => {
        const hoverOff = (e) => {
            if (!reference.current.contains(e.target)) {
                setHover(false)
            }
        }

        document.addEventListener("mouseover", hoverOff)
       return () => document.removeEventListener("mouseover", hoverOff)
        
    })

    return ( 
        <div className="messages__cover" onClick={openMail}>
            <div ref={reference} className="messages__container" onMouseOver={() => setHover(true)}>
                <div className="message__leftMiddle">
                    <div className="messages__left">
                        <IconButton className="icon__container1">
                            <DragIndicatorIcon className={hover ? "icon11" : "icon1"} />
                            <CheckBoxOutlineBlankIcon className={hover ? "icon222222" : "icon222"} />
                        </IconButton>
                        <IconButton className="icon__container">
                            <StarBorderPurple500Icon className={hover ? "icon2222" : "icon22"} />
                        </IconButton>
                        <IconButton className="icon__container">
                            <LabelImportantOutlinedIcon className={hover ? "icon2222" : "icon22"} />
                        </IconButton>
                        <h4>{title}</h4>
                    </div>
                    <div className="messages__middle">
                        <h4 className="m__desktop">{subject}<span> - {message}</span></h4>
                        <h4 className="m__subject">{subject}</h4>
                        <h4 className="m__content">{message}</h4>
                    </div>

                </div>
                
                <div className={hover ? "messages__end2" : "messages__end"}>
                    <h4 className="mobileTime">{todayTime}</h4>
                    <h4 className="desktopTime">{time}</h4>
                </div>
                <div className={hover ? "messages__endIcons2" : "messages__endIcons"}>
                    <IconButton className="end__iconButton">
                        <ArchiveOutlinedIcon className="icon5" />
                    </IconButton>
                    <IconButton className="end__iconButton">
                        <DeleteOutlineOutlinedIcon className="icon5" />
                    </IconButton>
                    <IconButton className="end__iconButton">
                        <MailOutlineIcon className="icon5" />
                    </IconButton>
                    <IconButton className="end__iconButton">
                        <AccessTimeIcon className="icon5" />
                    </IconButton>
                </div>
            </div>

        </div>
        
     );
}
 
export default Messages;