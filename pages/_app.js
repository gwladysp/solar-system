import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../styles/index.css";
import "../styles/planetAnimations.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
