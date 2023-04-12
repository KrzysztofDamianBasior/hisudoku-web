import { ThemeProvider, createTheme } from "@mui/material";
import { useAppSelector } from "./shared/hooks";
import { RootState } from "./shared/redux/store";
import AnimatedRoutes from "./AnimatedRoutes";
import { CssBaseline } from "@mui/material/";
import Dialogs from "./Dialogs";
import Snackbars from "./Snackbars";

// import { Typography, makeStyles } from "@mui/material";\
// import { styled } from "@mui/material/styles";
// import { useTheme } from "@mui/material/styles";
// const theme = useTheme();

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
    typography: {
      fontFamily: ["Alegreya", "serif"].join(","),
      fontWeightLight: 400,
      fontWeightRegular: 400,
      fontWeightMedium: 400,
      fontWeightBold: 700,
    },
  });

  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline enableColorScheme />
      <Dialogs />
      <Snackbars />
      <AnimatedRoutes />
    </ThemeProvider>
  );
}

export default App;

///////////////////////////////////////////////////////////////////////
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       className="backdrop"
//       onClick={() => onClick()}
//       drag
//       style={{}}
// variants={variants}
// initial="hidden"
// animate="visible"
// exit="exit"
//     animate={{x: move ? 200 : -200, rotate: rotate ? 360 : 0}}
//     transition={{type: "tween", duration: 0.1}}
//     onClick={()=>setMove(!move)}
//     >
//       {children}
//     </motion.div>

////////////////////////////////////////////////////////////////////////////////
// const Button = styled("button")<{ backgroundColor: string; primary: string }>`
//   width: 200px;
//   height: 50px;
//   background-color: ${(props) => props.backgroundColor};
//   color: ${(props) => (props.primary ? "hotpink" : "turquoise")};
//   &:hover {
//     & label {
//       color: green;
//     }
//   }
//   & > strong {
//     color: hotpink;
//   }
// `;

// <AnimatePresence
// initial={false}  -disable any initial animations on children that are present when the component is first rendered
// exitBeforeEnter={true}  -only render one component at a time. The exiting component will finish its exit animation before entering component is rendered
// onExitComplete={()=>null}  -fires when all exiting nodes have copmleted animating out
//>
// {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
// </AnimatePresence>
