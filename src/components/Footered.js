import Link from 'next/link'
import React from 'react'

const Footered = () => {
    return (
        <footer>
            <div className="content">
                <div className="container">
                    <p><b>Aperture Laboratories - 2022 - Todos os direitos reservados</b></p>
                    <ul>
                        <li><Link to="https://discord.com/guidelines" target="_blank">Diretrizes da comunidade</Link></li>
                        <li><Link to="https://discord.com/terms" target="_blank">Termos de serviço</Link></li>
                        <li><Link to="https://discord.com/privacy" target="_blank">Política de privacidade</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footered
