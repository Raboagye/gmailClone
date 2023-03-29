import { IconButton } from "@mui/material";
import "./BodyOptions.css"


const BodyOptions = ({Icon, smallSpace}) => {
    return ( 
        <div className={"body__options"}>
            <IconButton className={smallSpace? "iconButton" : "iconButton2"}>
                <Icon className={smallSpace? "body__icon2":"body__icon"} />
            </IconButton>
        </div>
     );
}
 
export default BodyOptions;