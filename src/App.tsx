import "./App.scss";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import About from "./components/About/About";
import Services from "./components/Services/Services";

function App() {
    return (
        <div className="main-container flex flex-col items-center">
            <Header />
            <MainSection />
            <About />
            <Services />
        </div>
    );
}

export default App;
