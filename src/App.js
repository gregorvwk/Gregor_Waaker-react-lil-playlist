import './App.css';
import SongOverview from "./Components/SongOverview"
import AboutUs from "./Components/AboutUs"
import Navbar from "./Components/Navbar"
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={SongOverview} exact />
        <Route path="/AboutUs" component={AboutUs} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
