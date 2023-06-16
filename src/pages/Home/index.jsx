import Cards from '../../components/Cards'
import '../../sass/main.scss'

function Home (){
 
    return(
        <section className="home-section">
            <div className="bg-img">
                <div className="bg-filter"></div>
                    <div className="bg-title">
                        <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </div>
            <Cards /> 
        </section>
    )
}

export default Home