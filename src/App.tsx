import "./App.scss";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Partners from "./components/Partners/Partners";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
    return (
        <div className="main-container flex flex-col items-center">
            <Header />
            <MainSection />
            <About />
            <Services />
            <Partners />
            <ContactUs />
        </div>
    );
}

export default App;
