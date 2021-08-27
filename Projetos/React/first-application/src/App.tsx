import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import "./css/global.module.css"
import FinancesDisplay from "./components/financesDisplay/Display"


export default () => {
    return (
        <div>
            <Header />
            <FinancesDisplay />
            <Home />
            <Footer />
        </div>
    )
}