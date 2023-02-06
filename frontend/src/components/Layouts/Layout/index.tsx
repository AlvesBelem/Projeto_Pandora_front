import { Aside } from '../Aside';
import { Content } from '../Content';
import { Logo } from '../Logo';
import { MainHeader } from '../MainHeader';
import styles from './styles.module.scss';


export function Layout({ children }) {
    return (
        <main className={styles.container}>
            <MainHeader />
            <Aside />
            <Logo />
            <Content>
                {children}
            </Content>
        </main>
    )
}