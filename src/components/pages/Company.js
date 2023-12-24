
import styles from "./Company.module.css"

function Company() {
    return (
        <div className={styles.company}>
            <h1 className={styles.company_header}>Minha Empresa</h1>
            <p>Esse é um projeto feito no VS Code, com o intuito de aprender sobre react. Estou usando o tutorial do canal: Matheus Battisti - Hora de Codar</p>
            <a href="https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO" target ="_blank" rel="noreferrer">Playlist utilizada</a>
        </div>
    )
}
export default Company