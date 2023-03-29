import { IconButton } from "@mui/material";
import "./MailContentOptions.css"

const MailContentOptions = ({Ticon1, Ticon2, Ticon3, vertical}) => {
    return ( 
        <div className="mailContentOptions__container">
            <IconButton className="ticon__button">
                {Ticon1 && <Ticon1 className="ticon" />}
            </IconButton>
            {Ticon2 && <IconButton className="ticon__button">
                <Ticon2 className="ticon" />
            </IconButton>}
            {Ticon3 && <IconButton className="ticon__button">
                <Ticon3 className="ticon" />
            </IconButton>}
            <div className={vertical && "border__right"}></div>

        </div>
    );
}
 
export default MailContentOptions;