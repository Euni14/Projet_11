import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./containers/Footer/Footer";
import "./containers/Footer/Footer.css";
import Header from "./containers/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
