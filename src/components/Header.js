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
                        <a href="/">
                            <img src="/images/logo.png" alt="Logo da Rocketseat"/>
                        </a>
                    </li>

                    <div className="separator"></div>

                    <li><a href="/">INÍCIO</a></li>
                    <li><a href="/sobrenos">SOBRE NÓS</a></li>
                    <li><a href="/patrocinadores">PATROCINADORES</a></li>
                    <li><a href="/desafios">DESAFIOS</a></li>
                    <li><a href="/asi">ASI</a></li>
                    <li><a href="https://yagasaki.vercel.app/blog" target="_blank">BLOG</a></li>
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
