import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./register.css"

const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory()

    const handleClick = async (e) =>{
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Password dont't match!")
        }else{
            const user = {
                username:username.current.value,
                email:email.current.value,
                password:password.current.value
            }
        try{
            await axios.post("/auth/register",user)
            history.push("/login")
        }catch(err){
            console.log(err);
        }    
        }
     }

    return ( 
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social Media</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Social Media</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" required ref={email} className="loginInput" type="email" />
                        <input placeholder="Password" required ref={password} className="loginInput" type="password" minLength="4" / >
                        <input placeholder="Password Again" required ref={passwordAgain} className="loginInput" type="password" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Register;