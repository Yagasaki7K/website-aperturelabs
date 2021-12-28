import React from 'react'
import Link from 'next/link'

const Footered = () => {
    return (
        <footer>
            <div className="content">
                <div className="container">
                    <p><b>Aperture Laboratories - 2022 - Todos os direitos reservados</b></p>
                    <ul>
                        <li><Link href="https://discord.com/guidelines" target="_blank" passHref><a>Diretrizes da comunidade</a></Link></li>
                        <li><Link href="https://discord.com/terms" target="_blank" passHref><a>Termos de serviço</a></Link></li>
                        <li><Link href="https://discord.com/privacy" target="_blank" passHref><a>Política de privacidade</a></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footered
