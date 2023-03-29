import { useDispatch } from "react-redux";
import { auth, provider } from "../../firebase";
import { login } from "../../Redux/userSlice";
import "./LoginPage.css"

const LoginPage = () => {
    const dispatch = useDispatch()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((user)=> {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                potoUrl: user.potoURL
            }))
        })
        .catch((error)=> alert(error.message))
    }
    return ( 
        <div className="login">
            <div className="login__container">
                <img src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Emblem.png" alt="gmail logo" />
                <button onClick={signIn}>LOGIN</button>
            </div>

        </div>
     );
}
 
export default LoginPage;