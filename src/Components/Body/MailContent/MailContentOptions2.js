import { IconButton } from "@mui/material";
import "./MailContentOptions2.css"

const MailContentOptions2 = ({Ticon1, Ticon2, Ticon3, vertical}) => {
    return ( 
        <div className="mailContentOptions__container2 mailContentOptions__container22">
            <IconButton className="ticon__button11 ticon__button22">
                {Ticon1 && <Ticon1 className="ticon" />}
            </IconButton>
            {Ticon2 && <IconButton className="ticon__button222">
                <Ticon2 className="ticon" />
            </IconButton>}
            {Ticon3 && <IconButton className="ticon__button3">
                <Ticon3 className="ticon" />
            </IconButton>}
            <div className={vertical && "border__right"}></div>

        </div>
    );
}
 
export default MailContentOptions2;