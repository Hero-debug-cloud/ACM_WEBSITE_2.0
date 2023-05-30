import Teams_info from "../Teams_info/Teams_info";
import styles from "./style.module.css";

const Teams = () => {
  return (
    <div className={styles.teams}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>teams</h1>
        <div className={styles.container}>
            <Teams_info position="down" name="web dev"/>
            <Teams_info position="up" name="app dev"/>
            <Teams_info position="down" name="graphic design"/>
            <Teams_info position="up" name="cybersecurity"/>
            <Teams_info position="down" name="ai / ml"/>
            <Teams_info position="up" name="data science"/>
        </div>
      </div>
    </div>
  );
};

export default Teams;
