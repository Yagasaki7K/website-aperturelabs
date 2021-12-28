import Header from '../src/components/Header'
import BestTechs from '../src/components/BestTechs'
import Techs from '../src/components/Techs'
import Discord from '../src/components/Discord'
import Partners from '../src/components/Partners'
import Contact from '../src/components/Contact'
import Footered from '../src/components/Footered'

function Home() {
    return (
        <>
            <Header/>
            <BestTechs/>
            <Techs/>
            <Discord/>
            {/* <Partners/> */}
            <Contact/>
            <Footered/>
        </>
    )
}

export default Home