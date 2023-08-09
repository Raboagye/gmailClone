import { Button } from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import "./sideBar2.css"
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
import OptionsMobile from "./Options/OptionsMobile";


const SideBar2 = ({menuIcon, menuClicked}) => {

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
    //     <>
    //      {
    //     menuIcon && <div className={  "sideBar2"} onMouseOver={() => dispatch(scrollActivated())}>
    //     <div className={ "sideBar__container2" }>
    //         <div className="button2">
    //             <Button startIcon={<CreateIcon className="create2" />} className="compose2" onClick={() => dispatch(Open())}>Compose</Button>
    //         </div>
    //         {console.log("menu Icon", menuIcon)}
    //         <div className="gmail__options2">
    //             <Options Icon={InboxIcon} text="Inbox2" value={45664} />
    //             <Options Icon={StarBorderPurple500Icon} text="Starred" />
    //             <Options Icon={AccessTimeIcon} text="Snoozed" />
    //             <Options Icon={LabelImportantIcon} text="Important" />
    //             <Options Icon={ForwardIcon} text="Sent" />
    //             <Options Icon={DescriptionIcon} text="Drafts" value={21} />
    //         </div>
    //         <div className="categories2" onClick={() => setArrowDown(!arrowDown)}>
    //             {arrowDown ? <ArrowDropDownIcon className="play__icon2" /> : <ArrowRightIcon className="play__icon2" />}

    //             <InputIcon className="input__icon2" />
    //             <h4 className={arrowDown ? "categories__option4" : "categories__option3"}>Categories</h4>
    //         </div>
    //         {arrowDown &&
    //             <>
    //                 {categoriesOpitons(PeopleAltIcon, "Social", 7093)}
    //                 {categoriesOpitons(ErrorOutlineIcon, "Updates", 6116)}
    //                 {categoriesOpitons(ForumIcon, "Forums", 43)}
    //                 {categoriesOpitons(SellIcon, "Promotions", 5710)}
    //             </>}
    //         {moreClicked ?
    //             <div className="more__container2" onClick={() => setMoreClicked(!moreClicked)}>
    //                 <KeyboardArrowUpIcon className="down__arrow2" />
    //                 <h4 className="more2">Less</h4>
    //             </div>
    //             :
    //             <div className="more__container2" onClick={() => setMoreClicked(!moreClicked)}>
    //                 <KeyboardArrowDownIcon className="down__arrow2" />
    //                 <h4 className="more2">More</h4>
    //             </div>
    //         }

    //         {moreClicked &&
    //             <div>
    //                 <Options Icon={ChatIcon} text="Chats" />
    //                 <Options Icon={ScheduleSendIcon} text="Scheduled" />
    //                 <Options Icon={MarkEmailReadIcon} text="All Mail" />
    //                 <Options Icon={ReportIcon} text="Spam" value={47} />
    //                 <Options Icon={DeleteIcon} text="Trash" />
    //                 <Options Icon={ManageHistoryIcon} text="Manage Labels" />
    //                 <Options Icon={AddIcon} text="Create new label" />
    //             </div>
    //         }

    //     </div>
        
    // </div>
        
    //    } 
    //     </>
    <div className={  menuIcon? "sideBar2" : "sideBar3"} onMouseOver={() => dispatch(scrollActivated())}>
        <div className={ "sideBar__container2" }>
            <div className="button2" onClick={menuClicked}>
                <Button startIcon={<CreateIcon className="create2" />} className="compose2" onClick={() => dispatch(Open())}>Compose</Button>
            </div>
            {console.log("menu Icon", menuIcon)}
            <div className="gmail__options2">
                <OptionsMobile Icon={InboxIcon} text="Inbox2" value={45664} />
                <OptionsMobile Icon={StarBorderPurple500Icon} text="Starred" />
                <OptionsMobile Icon={AccessTimeIcon} text="Snoozed" />
                <OptionsMobile Icon={LabelImportantIcon} text="Important" />
                <OptionsMobile Icon={ForwardIcon} text="Sent" />
                <OptionsMobile Icon={DescriptionIcon} text="Drafts" value={21} />
            </div>
            <div className="categories2" onClick={() => setArrowDown(!arrowDown)}>
                {arrowDown ? <ArrowDropDownIcon className="play__icon2" /> : <ArrowRightIcon className="play__icon2" />}

                <InputIcon className="input__icon2" />
                <h4 className={arrowDown ? "categories__option4" : "categories__option3"}>Categories</h4>
            </div>
            {arrowDown &&
                <>
                    {categoriesOpitons(PeopleAltIcon, "Social", 7093)}
                    {categoriesOpitons(ErrorOutlineIcon, "Updates", 6116)}
                    {categoriesOpitons(ForumIcon, "Forums", 43)}
                    {categoriesOpitons(SellIcon, "Promotions", 5710)}
                </>}
            {moreClicked ?
                <div className="more__container2" onClick={() => setMoreClicked(!moreClicked)}>
                    <KeyboardArrowUpIcon className="down__arrow2" />
                    <h4 className="more2">Less</h4>
                </div>
                :
                <div className="more__container2" onClick={() => setMoreClicked(!moreClicked)}>
                    <KeyboardArrowDownIcon className="down__arrow2" />
                    <h4 className="more2">More</h4>
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
 
export default SideBar2;