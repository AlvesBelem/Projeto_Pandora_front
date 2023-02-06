import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from './styles.module.scss';
import { ContentHeader } from "../../components/Layouts/ContentHeader";
import { SelecInput } from "../../components/ui/SelectInput";
import { CardPeople } from "../../components/ui/CardPeople";





const inter = Inter({ subsets: ["latin"] });

const cidades = [
    { value: 'Belém', label: 'Belém' },
    { value: 'Ananindeua', label: 'Ananindeua' },
    { value: 'Benevides', label: 'Benevides' },
]


export default function Customers() {
    return (
        <>
            <Head>
                <title>
                    Clientes
                </title>
            </Head>

            <main className={styles.container}>
                <ContentHeader title="Clientes">
                    <SelecInput options={cidades} />
                </ContentHeader>

                <h2 className={styles.title}>Dados do Cliente</h2>

                <li className={styles.people}>
                    <CardPeople
                        title="Nome Cliente"
                        subtitle="Apelido"
                        identification="623.399.582-53"
                        lastpurchase="23/11/2022"
                        billing="R$ 5.000,00"/>
                </li>
               

            </main>

        </>
    );
}
