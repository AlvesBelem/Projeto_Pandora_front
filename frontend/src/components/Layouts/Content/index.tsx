import styles from './styles.module.scss';


export function Content({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}