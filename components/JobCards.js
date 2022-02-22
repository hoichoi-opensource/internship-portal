import Image from 'next/image'
import styles from '../styles/JobCards.module.css'

const JobCards = ({ title, subtitle }) => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.row}>
            <div className={styles.subtitle}>{subtitle}</div>
            <div>
                <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.33333 4.66669L18.6667 14L9.33333 23.3334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default JobCards