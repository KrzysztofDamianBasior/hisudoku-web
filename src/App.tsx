import { ThemeProvider, createTheme } from "@mui/material";
import { useAppSelector } from "./shared/hooks";
import { RootState } from "./shared/redux/store";
import AnimatedRoutes from "./AnimatedRoutes";
import { CssBaseline } from "@mui/material/";

function App() {
  const theme = useAppSelector((state: RootState) => state.appTheme.theme);
  console.log(theme);
  const themeOptions = createTheme({
    palette: {
      mode: theme === "light" ? "light" : "dark",
      primary: {
        main: "#1978a5",
        light: "#1fbfb8",
        dark: "#05716c",
      },
      secondary: {
        main: "#EEE8A9",
        light: "#f9f5cb",
        dark: "#8a865b",
      },
      info: {
        main: "#9C5C82",
      },
    },
  });

  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <AnimatedRoutes />
    </ThemeProvider>
  );
}

export default App;
