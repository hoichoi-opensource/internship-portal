import styles from '../styles/PositionCards.module.css'

const PositionCards = ({ name, active = false, onClick, cardStyle }) => {
  return (
    <div className={active ? `${styles.tabContainer} ${styles.active}` : styles.tabContainer} onClick={onClick} style={cardStyle}>
        <div className={styles.tabName}>{name}</div>
        <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={active ? `${styles.tabIcon} ${styles.activeIcon}` : styles.tabIcon}>
        <path d="M28.5 16.5H19.5V7.5C19.5 7.10218 19.342 6.72064 19.0607 6.43934C18.7794 6.15804 18.3978 6 18 6C17.6022 6 17.2206 6.15804 16.9393 6.43934C16.658 6.72064 16.5 7.10218 16.5 7.5V16.5H7.5C7.10218 16.5 6.72064 16.658 6.43934 16.9393C6.15804 17.2206 6 17.6022 6 18C6 18.3978 6.15804 18.7794 6.43934 19.0607C6.72064 19.342 7.10218 19.5 7.5 19.5H16.5V28.5C16.5 28.8978 16.658 29.2794 16.9393 29.5607C17.2206 29.842 17.6022 30 18 30C18.3978 30 18.7794 29.842 19.0607 29.5607C19.342 29.2794 19.5 28.8978 19.5 28.5V19.5H28.5C28.8978 19.5 29.2794 19.342 29.5607 19.0607C29.842 18.7794 30 18.3978 30 18C30 17.6022 29.842 17.2206 29.5607 16.9393C29.2794 16.658 28.8978 16.5 28.5 16.5Z" fill={active ? "#FFFFFF" : "#6B717E"}/>
        </svg>
    </div>
  )
}

export default PositionCards