import { Outlet } from "react-router-dom"
import Navbar from "./shared/Navbar/Navbar"
import Footer from "./shared/Footer/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
