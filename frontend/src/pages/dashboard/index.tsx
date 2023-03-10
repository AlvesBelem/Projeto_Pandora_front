import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from './styles.module.scss';

import { Layout } from "../../components/Layouts/Layout";



const inter = Inter({ subsets: ["latin"] });

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>
                    Dashboard
                </title>
            </Head>
            <main className={styles.container}>
                <h1>Dashboard</h1>
            </main>

        </>
    );
}
