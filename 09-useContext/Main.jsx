import { Navigate, Route, Routes, Link} from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"

export const Main = () => {
  return (
    <UserProvider>
        <h1>Main</h1>
        <Navbar/>

        <hr />

        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="login" element={<LoginPage/>}></Route>
            <Route path="about" element={<AboutPage/>}></Route>

            <Route path="/*" element={<Navigate to="/"/>}></Route>
        </Routes>
    </UserProvider>
  )
}
