import { useContext } from "react"
import { AppContext } from "../context/ContextApi"


export const useAuth = () =>{
    return useContext(AppContext)
}