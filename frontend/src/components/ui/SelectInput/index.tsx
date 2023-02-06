import styles from './styles.module.scss';

interface SelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
}

export function SelecInput<SelectInputProps>({ options }) {
    return (
        <div className={styles.container}>
            <select>
                {
                    options.map(option => (
                        <option value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </div>
    )
}