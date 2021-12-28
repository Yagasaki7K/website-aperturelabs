import Image from 'next/image'
import React from 'react'

const Partners = () => {
    return (
        <section id="partner">
            <div className="content">
                <div className="container">
                    <h2>Parceiros</h2>
                    <p>Conheça nossos parceiros e encontre as melhores oportunidades</p>
                    <div>
                    <button><Image src="images/partners.png"/> <span>Website {`>`}</span></button>
                    <button><Image src="images/partners.png"/> <span>Website {`>`}</span></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
