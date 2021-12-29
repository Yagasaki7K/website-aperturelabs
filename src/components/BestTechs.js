function Discord() {
    window.open("https://discord.gg/nyTRNSV", "_blank")
}

const BestTechs = () => {
    return (
        <section id="description">
            <div className="content">
                <div className="container">
                    <h2>
                    As melhores tecnologias em programação, direto ao ponto e do jeito certo.
                    </h2>
                    <p>No meio de tanta informação e da quantidade de ferramentas que surgem 
                        todos os dias, você precisa de uma comunidade que te leve na direção certa
                    </p>
                    <button onClick={Discord}>Quero entrar nesse servidor</button>
                </div>
            <img src="/images/developer.svg" alt="Melhores tecnologias" width={300}/>
            </div>
        </section>
    )
}

export default BestTechs
