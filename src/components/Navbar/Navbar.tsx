import styles from "./style.module.css";
import classNames from "classnames";
import {useEffect,useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import nav_img from "../../assets/ACM_DITU.jpg";
const Navbar = () => {
  const navigate=useNavigate();
  const [activelink,setactivelink]=useState<any>();
  const location=useLocation();

  const links=[
      {label:"Home",to:"/"},
      {label:"About",to:"/about"},
      {label:"Teams",to:"/teams"},
      {label:"Events",to:"/events"},
      {label:"Projects",to:"/projects"},
      {label:"Blogs",to:"/blogs"},
      {label:"Contact Us",to:"/contact"},
  ]

  useEffect(()=>{
    const path=location.pathname;
    const index=links.findIndex((link)=>link.to==path);
    setactivelink(index);
  },[location.pathname]);
  return (
    <div className={classNames(styles.navbar,styles.center)}>
      <div className={classNames(styles.container,styles.center)}>
      <div className={classNames(styles.left)} onClick={()=>{navigate("/")}}>
        <img src={nav_img} alt="nav_logo" className={styles.logo}/>
      </div>
      <div className={styles.right}>
         {
          links.map((link,index)=>{
            return(
              <Link
            key={index}
            style={{ textDecoration: 'none' ,color:"white"}}
            to={link.to}
            className={styles.click}
          >
            <div className={styles.container} style={{ color: activelink == index ? "lightblue" : "" }}>
          <div className={styles.name}>{link.label}</div>
        </div>
          </Link>
            )
          })
         }
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
