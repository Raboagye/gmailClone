import { useEffect, useRef, useState } from "react";
import "./Options.css"

const Options = ({Icon, text, value}) => {
    const [clicked, setClicked] = useState(false)

    const reference = useRef(null)

    useEffect(() => {
        const handler = (e) => {
            if (!reference.current.contains(e.target)) {
                setClicked(false)
            }
        }

        document.addEventListener("click", handler)

        return () => document.removeEventListener("click", handler)
    })

    const classname = () => {
        if (clicked && value) {
            return "icon"
        } else if (clicked && !value) {
            return "icon2"
        }else {
            return "icon"
        }
    }

    return (
        <div>
            <div ref={reference} className={clicked ? "container2" : "container"} onClick={() => setClicked(true)}>
                <div className={"options"}>
                    {<Icon className={classname()} />}
                    <h4 className={value ? "text2" : "text"}>{text}</h4>
                </div>
                <div className={clicked ? "value2" : "value"}>
                    {value}
                </div>
            </div>

        </div>
        
     );
}
 
export default Options;