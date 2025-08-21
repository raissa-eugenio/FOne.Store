import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Topo from "@/components/Topo";
import Capa from "@/components/Capa";
import Produtos from "@/components/Produtos";

export default function Home() {
  return (
    <>
      <Head>
        <title>FOne.Store</title>
        <meta name="description" content="Loja de Jóias assimétricas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>

      <Topo />
      
      <section>
        <Capa />
      </section>

      <section>
        <Produtos />
      </section>
      
    </>
  );
}
