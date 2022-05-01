import { LanguageContextProvider } from "./contexts/LanguageContext";
import { LightDarkThemeContextProvider } from "./contexts/LightDarkThemeContext";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar"
import Main from "./components/Main";


function App() {
  return (
    <LightDarkThemeContextProvider>
    <LanguageContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </LanguageContextProvider>
    </LightDarkThemeContextProvider>
  );
}

export default App;
