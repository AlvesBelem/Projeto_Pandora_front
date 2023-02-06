import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from './styles.module.scss';

import { Layout } from "../../components/Layouts/Layout";
import Customers from "../clientes";




const inter = Inter({ subsets: ["latin"] });

export default function Painel() {
    return (
        <>
            <Head>
                <title>
                    Painel
                </title>
            </Head>
            <main className={styles.container}>
                <Layout>
                    <Customers />
                </Layout>
            </main>

        </>
    );
}
