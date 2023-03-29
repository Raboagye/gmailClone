import { Button } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import "./SideBar.css"
import Options from "./Options/Options";
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ForwardIcon from '@mui/icons-material/Forward';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import InputIcon from '@mui/icons-material/Input';
import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ForumIcon from '@mui/icons-material/Forum';
import SellIcon from '@mui/icons-material/Sell';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ChatIcon from '@mui/icons-material/Chat';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import ReportIcon from '@mui/icons-material/Report';
import DeleteIcon from '@mui/icons-material/Delete';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import AddIcon from '@mui/icons-material/Add';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import { useDispatch } from "react-redux";
import { Open } from "../../Redux/mailSlice";
import { scrollActivated } from "../../Redux/scrollSlice";


const SideBar = () => {

    const [arrowDown, setArrowDown] = useState(false)

    const [moreClicked, setMoreClicked] = useState(false)

    const categoriesOpitons = (Icons, words, numbers) => {
        return (
            <div className="options__categories">
                <Icons className="icons__categories"/>
                <h4 className="words">{words}</h4>
                <h4 className="numbers">{numbers}</h4>
            </div>
        )
    }

    const dispatch = useDispatch()

    return ( 
        <div className="sideBar" onMouseOver={() => dispatch(scrollActivated())}>
            <div className="sideBar__container">
                <div className="button">
                    <Button startIcon={<CreateIcon className="create" />} className="compose" onClick={() => dispatch(Open())}>Compose</Button>
                </div>
                <div className="gmail__options">
                    <Options Icon={InboxIcon} text="Inbox" value={45664} />
                    <Options Icon={StarBorderPurple500Icon} text="Starred" />
                    <Options Icon={AccessTimeIcon} text="Snoozed" />
                    <Options Icon={LabelImportantIcon} text="Important" />
                    <Options Icon={ForwardIcon} text="Sent" />
                    <Options Icon={DescriptionIcon} text="Drafts" value={21} />
                </div>
                <div className="categories" onClick={() => setArrowDown(!arrowDown)}>
                    {arrowDown ? <ArrowDropDownIcon className="play__icon" /> : <ArrowRightIcon className="play__icon" />}

                    <InputIcon className="input__icon" />
                    <h4 className={arrowDown ? "categories__option2" : "categories__option"}>Categories</h4>
                </div>
                {arrowDown &&
                    <>
                        {categoriesOpitons(PeopleAltIcon, "Social", 7093)}
                        {categoriesOpitons(ErrorOutlineIcon, "Updates", 6116)}
                        {categoriesOpitons(ForumIcon, "Forums", 43)}
                        {categoriesOpitons(SellIcon, "Promotions", 5710)}
                    </>}
                {moreClicked ?
                    <div className="more__container" onClick={() => setMoreClicked(!moreClicked)}>
                        <KeyboardArrowUpIcon className="down__arrow" />
                        <h4 className="more">Less</h4>
                    </div>
                    :
                    <div className="more__container" onClick={() => setMoreClicked(!moreClicked)}>
                        <KeyboardArrowDownIcon className="down__arrow" />
                        <h4 className="more">More</h4>
                    </div>
                }

                {moreClicked &&
                    <div>
                        <Options Icon={ChatIcon} text="Chats" />
                        <Options Icon={ScheduleSendIcon} text="Scheduled" />
                        <Options Icon={MarkEmailReadIcon} text="All Mail" />
                        <Options Icon={ReportIcon} text="Spam" value={47} />
                        <Options Icon={DeleteIcon} text="Trash" />
                        <Options Icon={ManageHistoryIcon} text="Manage Labels" />
                        <Options Icon={AddIcon} text="Create new label" />
                    </div>
                }

            </div>
            
        </div>
     );
}
 
export default SideBar;