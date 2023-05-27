import styles from "./style.module.css";
import "./styled.css";
import img1 from "../../assets/logo1.png";
import img2 from "../../assets/logo2.png";
import img3 from "../../assets/logo3.png";
import img4 from "../../assets/logo4.png";

type propstype={
  img:string,
  heading:string,
  dis:string,
  position:string,
  id:number
}

const About_info = ({heading,dis,position,id}:propstype) => {
  const images=[img1,img2,img3,img4];
  return (
    <div className={styles.info}>
      <div className={position=="right"?styles.inner_right:styles.inner_left}>
        <div className={styles.left}>
          <img src={images[id]} alt="logo" className={styles.logo} />
          <div className={styles.cover}></div>
          <div className={styles.blue_cover}></div>
        </div>
        <div className={styles.right}>
          <div className={position=="right"?styles.heading_right:styles.heading_left}>{heading}</div>
          <div className={styles.dis}>
            {dis}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_info;
