import { LanguageContextProvider } from "./contexts/LanguageContext";
import { LightDarkThemeContextProvider } from "./contexts/LightDarkThemeContext";
import { ButtonToggleLightDarkTheme } from "./components/elements/LightDarkThemeButton";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar"



function App() {
  return (
    <LightDarkThemeContextProvider>
    <LanguageContextProvider>
      <BrowserRouter>
        <NavBar />
        <ButtonToggleLightDarkTheme />
        <Switch>
          <Route exact path="/">

          </Route>
        </Switch>
      </BrowserRouter>
    </LanguageContextProvider>
    </LightDarkThemeContextProvider>
  );
}

export default App;
