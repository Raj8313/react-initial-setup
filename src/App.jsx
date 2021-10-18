import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/homescreen" component={HomeScreen} exact />
          <Route path="/product" component={ProductScreen} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
