import styles from "./style.module.css"


type propstype={
    position:string,
    name:string
}
const Teams_info = ({position,name}:propstype) => {
  return (
    <div className={position=="up"?styles.info_up:styles.info_down}>
        <div className={styles.inner}>
        <div className={position=="up"?styles.blue_cover_up:styles.blue_cover_down}>
           <div className={styles.gray_cover}>
            {/* <img src="#" alt="img" className={styles.img}/> */}
            <div className={styles.img}></div>
           </div>
        </div>
        </div>
        
        <div className={position=="up"?styles.container_up:styles.container_down}>
            <div className={styles.line}></div>
            <div className={position=="up"?styles.arrow_up:styles.arrow_down}></div>
            <div className={styles.name}>{name}</div>
        </div>
    </div>
  )
}

export default Teams_info