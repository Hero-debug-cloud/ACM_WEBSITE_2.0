import Navbar from "../../components/Navbar/Navbar";
import styles from "./style.module.css";
import { Outlet } from "react-router-dom"

const All = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default All