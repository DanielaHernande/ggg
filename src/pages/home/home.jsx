// Header
import { Header } from '../../components/header/Header'

const HomeShop = ()=>{
    return(
        <div className="home-shop">
            <Header />

            <h1>Home</h1>
            <div className="home-links">
                <a href="/admin">admin</a>
                <a href="/login">Login</a>
            </div>
          


        </div>
    )
}

export default HomeShop;