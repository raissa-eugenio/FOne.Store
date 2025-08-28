import estilos from './Contato.module.css'

export default function Contato() {
    return(
        <section id={estilos.contato}>
            <div className={estilos.contato}>
                <h2>Fale Conosco</h2>
                <p>
                    Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através das nossas redes Sociais ou da central de atendimento.
                </p>

                <div className={estilos.central_redes}>
                    <div className={estilos.bloco_contato}>
                        <h4>Contatos</h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src='./local.png' alt="Localização" />
                                </picture> Caraguatatuba - SP
                            </li>
                            <li>
                                <picture>
                                    <img src='./telefone.png' alt="Telefone" />
                                </picture> (12) 3888-8888
                            </li>
                            <li>
                                <picture>
                                    <img src='./email.png' alt="Email" />
                                </picture>contato@fonestore.com.br
                            </li>
                        </ul>
                    </div>

                    <div className={estilos.bloco_contato}>
                        <h4>Redes Sociais</h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src='./insta.png' alt="Instagram" />
                                </picture>@fone_store
                            </li>

                            <li>
                                <picture>
                                    <img src='./pin.png' alt="Pinterest" />
                                </picture>@fone_store
                            </li>

                            <li>
                                <picture>
                                    <img src='./tt.png' alt="Twitter" />
                                </picture>@fone_store
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}