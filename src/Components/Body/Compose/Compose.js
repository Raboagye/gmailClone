import { IconButton } from "@mui/material";
import "./Compose.css"
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { Close } from "../../../Redux/mailSlice";
import { scrollActivated } from "../../../Redux/scrollSlice";
import { useForm } from "react-hook-form";
import { db } from "../../../firebase";
import firebase from "firebase/compat/app";

const Compose = () => {
    const dispatch = useDispatch()
    const scrolling = useSelector((state) => state.scroll.scrollActive)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (formData) => {
        console.log(formData)
        db.collection("email").add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        },
        dispatch(Close())
        )
    }

    return ( 
        <div className={"compose__container"} onMouseOver={() => dispatch(scrollActivated())}>
            <div className="compose__heading">
                <h4>New Message</h4>
                <IconButton className="compose__iconButton" onClick={()=>dispatch(Close())}>
                    <CloseIcon className="compose__close" />
                </IconButton>
            </div>
            <form className="compose__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="compose__recipient">
                    <input name="to" type="email"  placeholder="Recipients" {...register('to', { required: true })} />
                    {errors.to && (<p className="error__message">Recipient's address is required</p>)}
                </div>
                <div className="compose__subject">
                    <input name="subject" type="text" placeholder="Subject" {...register('subject', { required: true })} />
                    {errors.subject && (<p className="error__message">Subject is required</p>)}
                </div>
                <div className="compose__message">
                    <textarea name="message" {...register('message', { required: true })} />
                    {errors.message && (<p className="error__message">Message is required</p>)}
                </div>
                <div className="compose__button">
                    <button type="submit">Send</button>
                </div>
            </form>
            
        </div>
     );
}
 
export default Compose;