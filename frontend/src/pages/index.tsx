import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'

import logoimg from '../../public/logo_petillo.png';
import { Inter } from "@next/font/google";
import styles from '../styles/home.module.scss';
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          PETTILO FAÇA SEU LOGIN
        </title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoimg} alt="Logo Petillo" />
        <div className={styles.login}>
          <form>
            <Input
              placeholder="Digite seu email"
              type="text"
            />
            <Input
              placeholder="Digite sua senha"
              type="password"
            />
            <Button
              type="submit"
              loading={false}
            >
              Acessar
            </Button>
          </form>

          <Link legacyBehavior href="/signup">
            <a className={styles.text}>Não possui uma conta? Cadastre-se !</a>
          </Link>
        </div>
      </div>
    </>
  );
}
