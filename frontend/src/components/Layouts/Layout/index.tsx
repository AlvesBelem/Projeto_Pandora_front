import { Aside } from '../Aside';
import { Content } from '../Content';
import { MainHeader } from '../MainHeader';
import styles from './styles.module.scss';


export function Layout() {
    return (
        <main className={styles.container}>
            <MainHeader />
            <Aside />
            <Content />
        </main>
    )
}