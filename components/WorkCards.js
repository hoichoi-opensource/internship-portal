import styles from '../styles/WorkCards.module.css';

const WorkCards = ({ icon, title, subtitle }) => {

  return (
    <div className={styles.container}>
        <div>
            {icon === "video" ? <svg viewBox="0 0 124 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
            <path d="M93 16.6666H31C19.5861 16.6666 10.3333 24.1285 10.3333 33.3333V66.6666C10.3333 75.8714 19.5861 83.3333 31 83.3333H93C104.414 83.3333 113.667 75.8714 113.667 66.6666V33.3333C113.667 24.1285 104.414 16.6666 93 16.6666Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M77.5 50L51.6666 37.5V62.5L77.5 50Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> : icon === "wand" ? <svg viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
            <path d="M63.0333 32.0334L56.8333 25.8334M77.5 20.6667V10.3334V20.6667ZM77.5 82.6667V72.3334V82.6667ZM41.3333 46.5H51.6667H41.3333ZM103.333 46.5H113.667H103.333ZM91.9667 60.9667L98.1667 67.1667L91.9667 60.9667ZM91.9667 32.0334L98.1667 25.8334L91.9667 32.0334ZM15.5 108.5L62 62L15.5 108.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg> : <svg viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
            <path d="M80.0834 62.0001L72.3334 72.3334M36.1667 51.6667V62.0001C36.1667 65.4462 38.2334 72.3334 46.5 72.3334C54.7667 72.3334 56.8334 65.4462 56.8334 62.0001V51.6667H36.1667ZM72.3334 51.6667L80.0834 62.0001L72.3334 51.6667ZM87.8334 72.3334L80.0834 62.0001L87.8334 72.3334ZM80.0834 62.0001L87.8334 51.6667L80.0834 62.0001Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M62 113.667C90.5347 113.667 113.667 90.5348 113.667 62C113.667 33.4653 90.5347 10.3334 62 10.3334C33.4653 10.3334 10.3333 33.4653 10.3333 62C10.3333 90.5348 33.4653 113.667 62 113.667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            }
        </div>
        <div className={styles.column}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
        </div>
    </div>
  )
}

export default WorkCards