import styles from '../styles/JobCards.module.css'

const JobCards = ({ title, subtitle, active, onClick }) => {
  return (
    <div className={active ? `${styles.container} ${styles.active}` : styles.container} onClick={onClick}>
        <div className={styles.title}>{title}</div>
        <div className={styles.row}>
            <div className={styles.subtitle}>{subtitle}</div>
        </div>
    </div>
  )
}

export default JobCards