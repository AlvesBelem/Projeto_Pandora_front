import styles from './styles.module.scss';
import Image from "next/image";
import logoimg from '../../../../public/logo_petillo.png';

export function Logo() {
    return (
        <div className={styles.container}>
            <Image src={logoimg} alt="Logo Petillo" />
        </div>
    )
}