import { BrowserRouter as Router , Route, Switch } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch >
          <Route path="/">
            <HomeScreen/>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
};

export default App;
