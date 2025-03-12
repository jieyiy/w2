import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

function Home(){
        
    return(
<div className="mainlayout">
    <div className="main">
        <Header/>
        <Content/>
    </div>

    <Footer/>

    </div>
    )

}
export default Home