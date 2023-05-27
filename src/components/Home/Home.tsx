import styles from "./style.module.css"
import Acm_front from "../Acm_front/Acm_front";
import Slider_comp from "../Slider_comp/Slider_comp"
import About from "../../components/About/About";
import About_info from "../About_info/About_info";
import info from "../../../db/info.json";

const Home = () => {
  type valuetype={
    id:number,
    heading:string,
    dis:string,
    position:string
  }
  return (
    <div className={styles.home}>
      <Acm_front/>
      <Slider_comp/>
      <About/>
      {info.map((value:valuetype)=>{
        return <About_info id={value.id} img="something" heading={value.heading} dis={value.dis} position={value.position}/>
      })}
    </div>
  )
}

export default Home