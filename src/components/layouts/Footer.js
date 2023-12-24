import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href='https://github.com/Luan-H' target="_blank" rel="noreferrer"><FaGithub /></a>
                </li>
                <li>
                    <a href='https://www.instagram.com/luanhenrique0122/' target="_blank" rel="noreferrer"><FaInstagram /></a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/luan-henrique-4a1a8123b/' target="_blank" rel="noreferrer"><FaLinkedin /></a>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Costs</span> &copy;2023</p>
        </footer>
    )
}

export default Footer