import "./App.css";
import Main from "./components/Main";
import Services from "./components/Services";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#282c34",
      contrastText: "#fff",
    },
  },
  typography: {},
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
      <Services />
      <div>
        <a href="https://iconscout.com/icons/dotnet" target="_blank" rel="noopener noreferrer">
          Dotnet
        </a>
        by
        <a
          href="https://iconscout.com/contributors/icon-mafia"
          target="_blank"
          rel="noopener noreferrer">
          Icon Mafia
        </a>
      </div>
    </ThemeProvider>
  );
}

export default App;
