import estilos from './Produtos.module.css';

export default function Produtos() {
    return(
        <section id="produtos" className={estilos.produtos}>
            <div className={estilos.titulos}>
                <h2>Nossos Produtos</h2>
                <p>
                    Descubra nossa coleção de joias únicas e sofisticadas, criadas para refletir sua essência. Cada peça é cuidadosamente selecionada para oferecer não apenas qualidade excepcional, mas também uma experiência inesquecível de elegância e exclusividade
                </p>

                <div className={estilos.joia_img}>
                    <div className={estilos.card_joia}>
                        <span className={estilos.selo}>Mais Vendido</span>
                        <h3>Anél Assimétrico</h3>
                        <picture>
                            <img src='./foto3.png' alt='Anél' /> 
                        </picture>
                        <p className={estilos.preco}>R$ 337,90</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                     <div className={estilos.card_joia}>
                        <span className={estilos.seloNovo}>Novo</span>
                        <h3>Gargantilha Assimétrica</h3>
                        <picture>
                            <img src='./foto1.png' alt='Gangantiha'/> 
                        </picture>
                        <p className={estilos.preco}>R$ 489,90</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                    <div className={estilos.card_joia}>
                        <h3>Jóia de metal para Sutiâ </h3>
                        <picture>
                            <img src='./foto7.png' alt='Sutiâ'/> 
                        </picture>
                        <p className={estilos.preco}>R$ 700,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>

                    <div className={estilos.card_joia}>
                        <h3>argola quadrada</h3>
                        <picture>
                            <img src='./foto6.png' alt='Argola quadrada'/> 
                        </picture>
                        <p className={estilos.preco}>R$ 489,90</p>
                        <button className={estilos.botao}>Comprar Agora</button>
                    </div>
                </div>

                

             
              
            </div>
        </section>
    )
}