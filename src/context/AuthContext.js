import {createContext, useReducer} from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE ={
    user:JSON.parse(localStorage.getItem("UD")),
    isFetching:false,
    error:false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state , dispatched] = useReducer(AuthReducer , INITIAL_STATE)

    return (
        <AuthContext.Provider 
            value ={{user:state.user ,
                    isFetching:state.isFetching ,
                    error:state.error,
                    dispatched
                }}>
                {children}
        </AuthContext.Provider>
    )
}