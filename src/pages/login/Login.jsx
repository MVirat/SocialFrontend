import "./login.css"
import {useContext, useRef} from  "react"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core"

const Login = () => {
    const email = useRef();
    const password = useRef();
    const{user,isFetching , dispatched} = useContext(AuthContext);


    const handleClick = (e) =>{
       e.preventDefault();
       loginCall({email:email.current.value,password:password.current.value},dispatched)
    }

    console.log(user);
    return ( 
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social Media</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Social Media</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" className="loginInput" ref={email} value="naruto@gmail.com" required />
                        <input placeholder="Password" type="password" className="loginInput" ref={password} required value="1234" minLength="4"/>
                        <button className="loginButton" type="submit" disabled={isFetching} >{isFetching?<CircularProgress  size="20px"/>:"Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">{isFetching?<CircularProgress  size="20px"/>:"Create A New Account"}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Login;