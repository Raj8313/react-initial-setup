import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";
import ProductScreen from "./screens/ProductScreen";
import { LOAD_INITIAL_IMAGES } from "./redux/constants";

const App = () => {
  const dispatch = useDispatch();
  const productReducer = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch({ type: LOAD_INITIAL_IMAGES.REQUEST });
  }, []);

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
