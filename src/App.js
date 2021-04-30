import "./App.scss";
import Header from "./Header/Header";
import Title from "./Title/Title";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Utsearch from "./Projects/Project/Utsearch/Utsearch";
import Bonus from "./Bonus/Bonus";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div id="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Title></Title>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Bonus></Bonus>
            <Footer></Footer>
          </Route>
          <Route exact path="/utsearch">
            <Utsearch></Utsearch>
          </Route>
          <Route exact path="/neurorehab-project"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
