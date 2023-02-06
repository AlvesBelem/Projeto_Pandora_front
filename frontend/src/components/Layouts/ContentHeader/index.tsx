
import { Input } from '../../ui/Input';
import {
    MdSearch
} from 'react-icons/md'
import styles from './styles.module.scss';
import { SelecInput } from '../../ui/SelectInput';
import { ReactNode } from 'react';

interface ContentHeaderProps {
    title: string;
    children: ReactNode;
}

interface ContainerProps {
    lineColor: string;
}

export function ContentHeader({
    title,
    children
}: ContentHeaderProps) {


    return (
        <header className={styles.container}>
            <h3 className={styles.title} >{title}</h3>
            <form className={styles.form}>
                <Input
                    placeholder="Pesquise pelo seu cliente"
                    type="text"
                />
                <div className={styles.search}><MdSearch /></div>

            </form>
            <div className={styles.controllers}>
                {children}
            </div>
        </header>
    )
}

