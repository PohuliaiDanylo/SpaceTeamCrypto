import "./App.scss";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";

function App() {
    return (
        <div className="main-container flex flex-col items-center">
            <Header />
            <MainSection />
        </div>
    );
}

export default App;
