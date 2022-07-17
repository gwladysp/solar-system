import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/index.css";
import "../styles/planetAnimations.css";
import Footer from "../components/Footer"

function MyApp({Component, pageProps}) {
    return (
        <>
            <Navbar/>
            <Component {...pageProps} />
            <Footer/>
        </>
    );
}

export default MyApp;
