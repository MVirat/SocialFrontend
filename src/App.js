import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {Switch, Route , BrowserRouter as Router, Redirect  } from "react-router-dom";
import axios from "axios"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

axios.defaults.baseURL = "https://boiling-castle-83178.herokuapp.com/api";

function App() {

  const {user} = useContext(AuthContext)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
        {user ? <Home />: <Login /> }    
        </Route>
        <Route path="/login">
        {user ?<Redirect to ="/" /> :<Login />}    
        </Route>
        <Route path="/register">
        {user ?<Redirect to ="/" /> :<Register /> }   
        </Route>
        <Route path="/profile/:username">
        <Profile />    
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
