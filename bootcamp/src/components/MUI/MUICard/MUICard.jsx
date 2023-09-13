import React from 'react'
import styles from './style.module.scss'
export default function MuiCard({ el }) {

    return (
        <div className={styles.card}>
            <div className={styles.cardBody}>
                <div className={styles.img}>
                    <img src={el.img} alt={el.name} />
                    <div />
                    <div className={styles.section}>
                        <div className={styles.viewed}>
                            {el.date} {el.viewed}
                        </div>
                        < div className={styles.title}>
                            {el.title}
                            <div />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
