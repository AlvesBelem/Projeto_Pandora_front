import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from './styles.module.scss';

import { Layout } from "../../components/Layouts/Layout";



const inter = Inter({ subsets: ["latin"] });

export default function Signup() {
    return (
        <>
            <Head>
                <title>
                    Página inicial
                </title>
            </Head>
            <main className={styles.container}>
                <Layout />
            </main>

        </>
    );
}
