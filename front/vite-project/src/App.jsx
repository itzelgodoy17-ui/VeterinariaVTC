import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./views/Home/Home"
import Login from "./views/Login/login"
import MisTurnos from "./views/MisTurnos/MisTurnos"
import Register from "./views/Register/Register"
import Navbar from "./components/NavBar/Navbar"
import { useEffect, useState } from "react"
import styles from "../src/App.module.css";
import NotFound from "./components/NotFound/NotFound"

function App() {

  const [isLogged, setIsLogged] = useState(localStorage.getItem("user"))
  const navigate = useNavigate()

  useEffect(() => {
    if(!isLogged && location.pathname !== "/login" && location.pathname !== "/register"){
      navigate("/login")
    }
  }, [])
  
  return (
    <>
    {
      !isLogged ? (
        <main className={styles.main}>
          <Routes>
            <Route path="/login" element={<Login setIsLogged={setIsLogged}/>}/>
            <Route path="/Register" element={<Register/>}/>
          </Routes>
        </main>
      ) : (
        <>
        <header>
          <Navbar setIsLogged={setIsLogged}/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/misturnos" element={<MisTurnos/>}/> 
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
        </>
      )
    }
    </>
  )
}

export default App
