import styles from './styles.module.scss';

interface CardPeopleProps {
    title: string;
    subtitle: string;
    identification: string;
    lastpurchase: string;
    billing: string;
}
export function CardPeople({
    title,
    subtitle,
    identification,
    lastpurchase,
    billing
}: CardPeopleProps) {
    return (
        <div className={styles.container}>

            <li className={styles.card}>
                <div className={styles.tag} />
                <div className={styles.people}>
                    <span>{title}</span>
                    <small>{subtitle}</small>
                    <small>{identification}</small>
                </div>
                <div className={styles.values}>
                    <small>{lastpurchase}</small>
                    <h3>{billing}</h3>
                </div>
            </li>


        </div>
    )
}