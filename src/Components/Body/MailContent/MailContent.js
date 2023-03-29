import "./MailContent.css"
import MailContentOptions from "./MailContentOptions";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveIcon from '@mui/icons-material/Archive';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddTaskIcon from '@mui/icons-material/AddTask';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Avatar, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const MailContent = () => {
    const selectedMail = useSelector((state)=>state.mail.selectedMail)
    const user = useSelector((state)=>state.user.user)

    const navigate = useNavigate()
    return ( 
        <div className="mailContent__container">
            <div className="top__part">
                <div className="mailContent__top" onClick={() => navigate("/")}>
                    <MailContentOptions Ticon1={ArrowBackIcon} />
                </div>
                <div className="mailContent__middle">
                    <MailContentOptions Ticon3={DeleteIcon} Ticon1={ArchiveIcon} Ticon2={ReportGmailerrorredIcon} vertical={true} />
                </div>
                <div className="mailContent__middle">
                    <MailContentOptions Ticon1={MailOutlineIcon} Ticon2={AccessTimeIcon} Ticon3={AddTaskIcon} vertical={true} />
                </div>
                <div className="mailContent__top">
                    <MailContentOptions Ticon1={DriveFileMoveOutlinedIcon} Ticon2={LabelOutlinedIcon} Ticon3={MoreVertOutlinedIcon} />
                </div>

                <div className="body__right2">
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
            <div className="mail__subject">
                <div className="subject__left">
                    <h4>{selectedMail?.subject}</h4>
                    <IconButton className="label__button">
                        <LabelImportantOutlinedIcon  className="label__important"/>
                    </IconButton>
                    <div className="buttonss">
                        <h4>Inbox</h4>
                        <h3>x</h3>
                    </div>
                    
                </div>
                <div className="subject__right">
                    <IconButton>
                        <PrintOutlinedIcon className="print"/>
                    </IconButton>
                    <IconButton>
                        <OpenInNewOutlinedIcon className="open__newTab"/>
                    </IconButton>
                </div>

            </div>
            <div className="sender">
                <div className="sender__details">
                    <Avatar className="sender__avatar"/>
                    <div className="sender__info">
                        <h4>{user?.displayName} <span>&lt;{user?.email}&gt;</span></h4>
                        <div className="receiver">
                            <h3>to {selectedMail?.title}</h3>
                            <IconButton className="receiver__button">
                                <ArrowDropDownOutlinedIcon className="receiver__dropDown" />
                            </IconButton>
                        </div>                        
                    </div>
                </div>
                <div className="time">
                    <h4>{selectedMail?.time}</h4>
                    <div className="mail__icons">
                        <MailContentOptions Ticon1={StarRateOutlinedIcon} Ticon2={ReplyOutlinedIcon} Ticon3={MoreVertOutlinedIcon} />
                    </div>
                    
                </div>
            </div>
            <div className="mail__body">
                <p>
                    {selectedMail?.message}
                </p>

            </div>
        </div>
     );
}
 
export default MailContent;