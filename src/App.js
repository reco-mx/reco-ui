import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header/Header'
import RestaurantCard from './components/RestaurantCard/RestaurantCard';
import CardList from './components/RestaurantCard/CardList';
import Banner from './components/Banner/Banner'
import PlaceForm from './components/AddPlace/PlaceForm'
function App() {
  return (

    
    <div className="App">
      
    <Router>
      <Header/>
      <Switch>
        <Route path ="/home">
          <Banner/>
          <CardList/>
        </Route>
        <Route path="/admin-add">
          <PlaceForm/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
