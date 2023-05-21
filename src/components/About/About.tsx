import styles from "./style.module.css"
import dit from "../../assets/bg-dit-university 2.png";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.inner}>
      <img src={dit} alt="dit" className={styles.collage_img} />
      <span className={styles.text_about}>About</span>
      <span className={styles.text_us}>Us</span>
      </div>
      
    </div>
  )
}

export default About;