import styles from './Test.module.css'
function Test() {
    return (
        <div className={styles.container}>
            <div className={styles.el1}>
                <p>Element 1</p>
            </div>
            <div className={styles.el2}>
                <p>Element 2</p>
            </div>
            <div className={styles.el3}>
                <p>Element 3</p>
            </div>
        </div>
    )
}

export default Test