import Content from "./Content/Content.js";
import Footer from "./Footer/Footer.js";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
        <Router>
            <div className="App page">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </Router>
    </div>
  );
}

export default App;
