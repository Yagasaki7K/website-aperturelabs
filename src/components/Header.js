import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
                        <Link href="/index" passHref>
                            <a>
                                <Image src="/images/logo.png" alt="Logo da Aperture Laboratories"/>
                            </a>
                        </Link>
                    </li>

                    <div className="separator"></div>

                    <li><Link href="/index" passHref><a>INÍCIO</a></Link></li>
                    <li><Link href="/sobrenos" passHref><a>SOBRE NÓS</a></Link></li>
                    <li><Link href="/patrocinadores" passHref><a>PATROCINADORES</a></Link></li>
                    <li><Link href="/desafios" passHref><a>DESAFIOS</a></Link></li>
                    <li><Link href="/asi" passHref><a>ASI</a></Link></li>
                    <li><Link href="https://yagasaki.vercel.app/blog" target="_blank" passHref><a>BLOG</a></Link></li>
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
