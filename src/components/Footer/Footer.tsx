import styles from "./style.module.css";
import acmdituLogo from "../../assets/ACM_DITU.jpg";
import acmwLogo from "../../assets/ACM-W_NewLogo.png"
import instaLogo from "../../assets/instagramLogo.svg"
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdLocationPin} from 'react-icons/md'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin, BsMedium, BsTwitter, BsFacebook} from 'react-icons/bs'
const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.top_section}>
                <div className={styles.left}>
                    <div className={styles.logo_container}>
                        <img className={styles.logo} src={acmdituLogo} alt="acm" />
                        <img className={styles.logo} src={acmwLogo}alt="acm" />
                    </div>
                    <div className={styles.left_content}>
                        <div className={styles.address}>Mussoorie-Diversion Road, Makkawala, Dehradun, Uttarakhand-248009, India</div>
                        <div className={styles.phone}>
                            <BsFillTelephoneFill size="20"/>
                            <p>+91 7364678292</p>
                        </div>
                        <div className={styles.direction}>
                            <MdLocationPin size="20"/>
                            <p>Direction to Campus</p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <h1>DITU ACM SC</h1>
                    <div className={styles.social}>
                        <BsLinkedin size="28" color="#0A66C2"/>
                        <BsTwitter size="28" color="#1D9BF0"/>
                        <BsFacebook size="28" color="#1877F2"/>
                        <BsMedium size="28"/>
                        <img className={styles.insta} src={instaLogo} alt="insta" />
                    </div>
                    <div className={styles.news}>
                        <AiOutlineMail size="20"/>
                        <h3>Subscribe to our newsletter</h3>
                    </div>
                    <form>
                        <input type="email" placeholder="Enter your e-mail address"/>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
            <hr className={styles.break_line}/>
            <div className={styles.bottom_section}>
                <p>Copyright © 2023 All rights reserved </p>
                <p>Design and Developed by DITU ACM Team</p>
            </div>
        </div>
    )
}
export default Footer;