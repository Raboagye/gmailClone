import "./BodyComponent.css"
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import GroupIcon from '@mui/icons-material/Group';
import { useState } from "react";

const BodyComponent = () => {
    const [active1, setActive1] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)

    const clickedOne = () => {
        setActive1(true)
        setActive2(false)
        setActive3(false)
    }

    const clickedTwo = () => {
        setActive2(true)
        setActive1(false)
        setActive3(false)
    }

    const clickedThree = () => {
        setActive3(true)
        setActive1(false)
        setActive2(false)
    }
    return ( 
        <div className="bodyComponent">
            <div className="bodyComponent__container1">
                <div className={active1 ? "bodyComponent__content11" : "bodyComponent__content1"} onClick={clickedOne}>
                    <InboxIcon className="bodyComponent__icon1" />
                    <h4>Primary</h4>
                </div>
            </div>
            <div className="bodyComponent__container2">
                <div className={active2 ? "bodyComponent__content22" : "bodyComponent__content2"} onClick={clickedTwo}>
                    <LocalOfferOutlinedIcon className="bodyComponent__icon2" />
                    <h4>Promotion</h4>
                </div>
            </div>
            <div className="bodyComponent__container3">
                <div className={active3 ? "bodyComponent__content33" : "bodyComponent__content3"} onClick={clickedThree}>
                    <GroupIcon className="bodyComponent__icon2" />
                    <h4>Social</h4>
                </div>
           </div>
            
            
        </div>
     );
}
 
export default BodyComponent;