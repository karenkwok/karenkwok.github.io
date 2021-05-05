import "./App.scss";
import Header from "./Header/Header";
import Title from "./Title/Title";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Utsearch from "./Projects/Project/Utsearch/Utsearch";
import Neurorehab from "./Projects/Project/Neurorehab/Neurorehab";
import Resume from "./Projects/Resume/Resume";
import Bonus from "./Bonus/Bonus";
import Art from "./Bonus/Art/Art";
import Icecream from "./Bonus/Icecream/Icecream";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3B1CDF",
      light: "#5E40FF",
      dark: "#180196",
    },

    secondary: {
      main: "#262626",
      light: "",
      dark: "",
    },
  },
});

function App() {
  return (
    <div id="App">
      <MuiThemeProvider theme={theme}>
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
            <Route exact path="/neurorehab-project">
              <Neurorehab></Neurorehab>
            </Route>
            <Route exact path="/resume">
              <Resume></Resume>
            </Route>
            <Route exact path="/art">
              <Art></Art>
            </Route>
            <Route exact path="/icecream">
              <Icecream></Icecream>
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
