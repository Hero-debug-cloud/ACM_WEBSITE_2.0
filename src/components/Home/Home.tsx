import styles from "./style.module.css"
import Acm_front from "../Acm_front/Acm_front";
import Slider_comp from "../Slider_comp/Slider_comp"
import About from "../../components/About/About";

const Home = () => {
  return (
    <div className={styles.home}>
      <Acm_front/>
      <Slider_comp/>
      <About/>
    </div>
  )
}

export default Home