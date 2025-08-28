import estilos from './Sobre.module.css'

export default function Sobre() {
    return (
        <section id={estilos.sobre} className={estilos.sobre}>
            <div className={estilos.center}>
                <h2>Sobre nós</h2>
                <p>Na FOne.Store, acreditamos que a beleza está na singularidade. Nossa loja é especializada em jóias assimétricas, projetadas para destacar a individualidade e o estilo único de cada pessoa. Cada peça é cuidadosamente selecionada para garantir qualidade e design inovador. Explore nossa coleção e encontre a jóia perfeita que reflete quem você é.</p>


                <div className={estilos.elementos_sobre}>
                    <picture>
                        <img src='loja.jpg' alt="Nossa Loja" />
                    </picture>


                    <div className={estilos.sobre_elementos}>
                        <h4>Nossas Filiais</h4>
                        <p>Hoje temos dez filiais pelo Brasil</p>
                    </div>

                    <div className={estilos.sobre_elementos}>
                        <h4>Atendimento individual</h4>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>

                    <picture>
                        <img src='atendimento1.jpg' alt="Atendimento" />
                    </picture>
                </div>
            </div>
        </section>
    )
}