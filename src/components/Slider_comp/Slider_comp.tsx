import styles from "./style.module.css";
import Slider from "react-slick";
import "./slide_comp.css"
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const Slider_comp = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className={styles.slider}>
      <div className={styles.inner}>
        <Slider {...settings} className={styles.real_slide}>
          <img src={img1} alt="image" className={styles.child}/>
          <img src={img2} alt="image" className={styles.child}/>
          <img src={img3} alt="image" className={styles.child}/>
          <img src={img4} alt="image" className={styles.child}/>
        </Slider>
      </div>
    </div>
  );
};

export default Slider_comp;1