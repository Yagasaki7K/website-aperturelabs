import React from 'react'
import Image from 'next/image'

const Partners = () => {
    return (
        <section id="partner">
            <div className="content">
                <div className="container">
                    <h2>Parceiros</h2>
                    <p>Conheça nossos parceiros e encontre as melhores oportunidades</p>
                    <div>
                    <button><Image src="images/partners.png" alt="Parceiros"/> <span>Website {`>`}</span></button>
                    <button><Image src="images/partners.png" alt="Parceiros"/> <span>Website {`>`}</span></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
