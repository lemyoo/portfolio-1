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
    </ThemeProvider>
  );
}

export default App;
