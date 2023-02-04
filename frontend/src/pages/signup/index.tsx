import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'

import logoimg from '../../../public/logo_petillo.png';
import { Inter } from "@next/font/google";
import styles from '../../styles/home.module.scss';
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";



const inter = Inter({ subsets: ["latin"] });

export default function Signup() {
    return (
        <>
            <Head>
                <title>
                    FAÇA SEU CADASTRO AGORA!
                </title>
            </Head>
            <div className={styles.containerCenter}>
                <Image src={logoimg} alt="Logo Petillo" />
                <div className={styles.login}>
                    <h1>Criando sua conta</h1>
                    <form>
                        <Input
                            placeholder="Digite seu nome completo"
                            type="text"
                        />
                        <Input
                            placeholder="Digite seu apelido"
                            type="text"
                        />
                        <Input
                            placeholder="Digite seu email"
                            type="text"
                        />
                        <Input
                            placeholder="Digite sua senha"
                            type="password"
                        />
                        <Input
                            placeholder="confirme sua senha"
                            type="password"
                        />
                        <Button
                            type="submit"
                            loading={false}
                        >
                            Cadastrar
                        </Button>
                    </form>

                    <Link legacyBehavior href="/">
                        <a className={styles.text}>Já possui uma conta? Faça seu login !</a>
                    </Link>

                </div>
            </div>
        </>
    );
}
