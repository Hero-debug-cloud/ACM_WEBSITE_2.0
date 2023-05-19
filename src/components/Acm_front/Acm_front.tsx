import styles from "./style.module.css";
import ClassNames from "classnames"

const Acm_front = () => {
  return (
    <div className={ClassNames(styles.front,styles.center)}>
        <div className={styles.inner}>
            <div className={styles.heading}>
                <span className={styles.gray}>ditu</span>
                <span className={styles.blue}>acm</span>
                <span className={styles.gray}>student</span>
                <span className={styles.gray}>chapter</span>
            </div>
            <div className={styles.dis}>
            WE SEE A WORLD WHERE COMPUTING HELPS SOLVE TOMORROW'S PROBLEMS - WHERE WE USE OUR KNOWLEDGE AND SKILLS TO ADVANCE THE PROFESSION AND MAKE A POSITIVE IMPACT.
            </div>
        </div>
    </div>
  )
}

export default Acm_front