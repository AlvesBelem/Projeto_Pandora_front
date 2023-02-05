
import styles from './styles.module.scss';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md'
import Link from 'next/link'


export function Aside() {
    return (
        <aside className={styles.container}>

            <nav className={styles.links}>
                <span className={styles.icon}>
                    <MdDashboard />
                </span>
                <Link legacyBehavior href="/dashboard">
                    <a className={styles.link}>
                        Dashboard
                    </a>
                </Link>
            </nav>
            <nav className={styles.links}>
                <span className={styles.icon}>
                    <MdArrowUpward />
                </span>
                <Link legacyBehavior href="/dashboard">
                    <a className={styles.link}>
                        Subiu
                    </a>
                </Link>
            </nav>
            <nav className={styles.links}>
                <span className={styles.icon}>
                    <MdArrowDownward />
                </span>
                <Link legacyBehavior href="/dashboard">
                    <a className={styles.link}>
                        Desceu
                    </a>
                </Link>
            </nav>

            <nav className={styles.links}>
                <span className={styles.icon}>
                    <MdExitToApp />
                </span>
                <Link legacyBehavior href="/dashboard">
                    <a className={styles.link}>
                        Sair
                    </a>
                </Link>
            </nav>


        </aside>
    )
}