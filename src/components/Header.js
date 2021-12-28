import Link from 'next/link'
import React from 'react'

function Discord() {
    window.open("https://discord.gg/nyTRNSV", "_blank")
}

const Header = () => {
    return (
        <header id="main-header">
            <div className="content">
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <img src="/images/logo.png" alt="Logo da Rocketseat"/>
                        </Link>
                    </li>

                    <div className="separator"></div>

                    <li><Link href="/">INÍCIO</Link></li>
                    <li><Link href="/sobrenos">SOBRE NÓS</Link></li>
                    <li><Link href="/patrocinadores">PATROCINADORES</Link></li>
                    <li><Link href="/desafios">DESAFIOS</Link></li>
                    <li><Link href="/asi">ASI</Link></li>
                    <li><Link href="https://yagasaki.vercel.app/blog" target="_blank">BLOG</Link></li>
                </ul>
            </nav>

            <div className="side">
                <button onClick={Discord}>Discord</button>
            </div>
            </div>
        </header>
    )
}

export default Header
