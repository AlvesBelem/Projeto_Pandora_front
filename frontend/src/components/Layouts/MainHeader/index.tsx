import { useMemo } from 'react';
import emojis from '../../../utils/emojis';
import styles from './styles.module.scss';


export function MainHeader() {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, [])


    return (
        <header className={styles.container}>
            <div className={styles.emoji}>{emoji}</div>
            <h3>Seja bem vindo!</h3>
            <span> Marcelo Alves</span>
        </header>
    )
}