import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      Entête
      {/*<Header />*/}
      <div>
        <Outlet />
      </div>
      {/*<Footer />*/}
      Footer
    </div>
  );
}

export default App;
