import styles from '../styles/JobCards.module.css'

const JobCards = ({ title, subtitle, active, onClick }) => {
  return (
    <div className={active ? `${styles.container} ${styles.active}` : styles.container} onClick={onClick}>
        <div className={styles.title}>{title}</div>
        <div className={styles.row}>
            <div className={styles.subtitle}>{subtitle}</div>
            <div>
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={active ? `${styles.icon} ${styles.activeIcon}` : styles.icon}>
                <path d="M9.33333 4.66669L18.6667 14L9.33333 23.3334" stroke={active ? "white" : "#6b717e"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default JobCards