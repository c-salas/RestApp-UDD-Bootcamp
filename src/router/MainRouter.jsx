import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { MenuPage } from "../pages/MenuPage"
import { ReservaPage } from "../pages/ReservaPage"
import {LoginPage} from "../pages/LoginPage"
import { AdminPages } from "../pages/AdminPages"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { useState } from "react"



 export const MainRouter = () => {
 const [user, setUser] = useState(null)

return(
 <>
<Routes>
<Route path="/" element={<HomePage/>}/> 
<Route path="/carta" element={<MenuPage/>}/> 
<Route path="/login" element={<LoginPage setLogin={setUser}/>}/> 
<Route path="/reserva" element={<ReservaPage/>}/> 


{/* ruta protegida */}
<Route element={<ProtectedRoutes isAllowed={user}/>}> 
<Route path="/admin" element={<AdminPages/>}/>
</Route>


</Routes>
 </>
) }