
import styles from './styles.module.scss';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdPerson,
    MdPermIdentity,
    MdViewInAr
} from 'react-icons/md'
import Link from 'next/link'


export function Aside() {
    return (
        <aside className={styles.container}>

            <nav className={styles.links}>
                a
                <div className={styles.menu}>
                    <span className={styles.icon}><MdDashboard /></span>
                    <Link legacyBehavior href="/dashboard">
                        <a className={styles.link}>
                            Dashboard
                        </a>
                    </Link>
                </div>

                <div className={styles.menu}>
                    <span className={styles.icon}><MdPerson /></span>
                    <Link legacyBehavior href="/clientes">
                        <a className={styles.link}>
                            Clientes
                        </a>
                    </Link>
                </div>

                <div className={styles.menu}>
                    <span className={styles.icon}><MdPermIdentity /></span>
                    <Link legacyBehavior href="/fornecedores">
                        <a className={styles.link}>
                            Fornecedores
                        </a>
                    </Link>
                </div>

                <div className={styles.menu}>
                    <span className={styles.icon}><MdViewInAr /></span>
                    <Link legacyBehavior href="/produtos">
                        <a className={styles.link}>
                            Produtos
                        </a>
                    </Link>
                </div>

                <div className={styles.menu}>
                    <span className={styles.icon}><MdArrowUpward /></span>
                    <Link legacyBehavior href="/entradas">
                        <a className={styles.link}>
                            Entradas
                        </a>
                    </Link>
                </div>

                <div className={styles.menu}>
                    <span className={styles.icon}><MdArrowDownward /></span>
                    <Link legacyBehavior href="/saidas">
                        <a className={styles.link}>
                            Saidas
                        </a>
                    </Link>
                </div>

                <div className={styles.menu2}>
                    <span className={styles.icon}><MdExitToApp /></span>
                    <Link legacyBehavior href="/">
                        <a className={styles.link}>
                            Sair
                        </a>
                    </Link>
                </div>


            </nav>


        </aside>
    )
}