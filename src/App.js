import React , {Component} from "react";
import {Switch , Route , BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mealcontent from "./Components/MealContent"
import Ordercontent from "./Components/OredrContent";
import './App.css';
import Navbar from "./Components/Navbar";

class App extends Component{
  render(){
    return (
      <div className="container">
        <Router >
        <Navbar />
        <Switch>
          <Route exact path="/addMeal" component={Ordercontent}/>
          <Route path="/" component={Mealcontent}/>
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
