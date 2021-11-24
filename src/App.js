import "./App.scss";
import Header from "./Header/Header";
import Title from "./Title/Title";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Utsearch from "./Projects/Project/Utsearch/Utsearch";
import NotInstagram from "./Projects/Project/NotInstagram/NotInstagram";
import Neurorehab from "./Projects/Project/Neurorehab/Neurorehab";
import Bonus from "./Bonus/Bonus";
import Art from "./Bonus/Art/Art";
import Icecream from "./Bonus/Icecream/Icecream";
import PageNotFound from "./PageNotFound/PageNotFound";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    button: {
      textTransform: "none", // no capitalization
    },
  },
  palette: {
    primary: {
      main: "#2504d6",
      light: "#5E40FF", // not sure yet because i havent used
      dark: "#180196", // darkest-purple (only used for utsearch app btn hover)
    },

    secondary: {
      main: "#262626",
      light: "#A3A2A5",
      dark: "#0C0B0F", // not yet used
    },
  },
});

function App() {
  return (
    <div id="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Title></Title>
              <About></About>
              <Skills></Skills>
              <Projects></Projects>
              <Bonus></Bonus>
              <Footer></Footer>
            </Route>
            <Route exact path="/utsearch">
              <Utsearch></Utsearch>
              <Footer></Footer>
            </Route>
            <Route exact path="/notinstagram">
              <NotInstagram></NotInstagram>
              <Footer></Footer>
            </Route>
            <Route exact path="/neurorehab-project">
              <Neurorehab></Neurorehab>
              <Footer></Footer>
            </Route>
            {/* <Route exact path="/art">
              <Art></Art>
            </Route> */}
            <Route exact path="/icecream">
              <Icecream></Icecream>
            </Route>
            <Route path="/*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
