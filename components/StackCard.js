import styles from "../styles/StackCards.module.css"

import Amazon from './icons/Amazon'
import Docker from './icons/Docker'
import Firebase from './icons/Firebase'
import Git from './icons/Git'
import Kotlin from './icons/Kotlin'
import Node from './icons/Node'
import React from './icons/React'
import Redis from './icons/Redis'
import Stripe from './icons/Stripe'
import Swift from './icons/Swift'

const StackCard = ({ icon, name }) => {
  return (
    <div className={styles.container}>
        <div>
            {icon === "kotlin" ? <Kotlin /> : icon === "swift" ? <Swift /> : icon === "react" ? <React /> : icon === "node" ? <Node /> : icon === "firebase" ? <Firebase /> : icon === "redis" ? <Redis /> : icon === "amazon" ? <Amazon /> : icon === "stripe" ? <Stripe /> : icon === "git" ? <Git /> : <Docker />}
        </div>
        <div>{name}</div>
    </div>
  )
}

export default StackCard