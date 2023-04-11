import { ThemeProvider, createTheme } from "@mui/material";
import { useAppSelector } from "./shared/hooks";
import { RootState } from "./shared/redux/store";
import AnimatedRoutes from "./AnimatedRoutes";
import { CssBaseline } from "@mui/material/";
import Dialogs from "./Dialogs";

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
      <AnimatedRoutes />
    </ThemeProvider>
  );
}

export default App;

// import { Typography, makeStyles } from "@mui/material";

// const useStyles = makeStyles({
//   typographyStyle: {
//     color: "blue",
//   },
// });
// <Typography className={classes.typographyStyle}></Typography>

// <Typography
//   align="right"
//   color="secondary" //"primary"
//   gutterBottom
//   variant="h1"
// ></Typography>

///////////////////////////////////////////////////////////////////////

// width: 50vw
// max-width: 400px
// min-width: 200px
// clamp(200px, 50vw, 400px)
// clamp działa z font-size
// font-size: clamp(1rem, 8vw, 5rem)

// const Backdrop = ({ children, onClick }: Props) => {
//   const theme = useTheme();
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="backdrop"
//       onClick={() => onClick()}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         height: "100%",
//         width: "100%",
//         background: "#000000e1",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

////////////////////////////////////////////////////////////////////////////////

// import { styled } from "@mui/material/styles";
// import { useTheme } from "@mui/material/styles";
// const theme = useTheme();

// <motion.button
// whileHover={{ scale: 1.1 }}
// whileTap={{ scale: 0.9 }}
// className="confirmaton-button"
// onClick={() => null}
// >
// {text}
// </motion.button>

// const dropIn = {
//   hidden: {
//     y: "-100vh",
//     opacity: 0,
//   },
//   visible: {
//     y: "0",
//     opacity: 1,
//     transition: {
//       duration: 0.1,
//       type: "spring",
//       damping: 25,
//       stiffness: 500,
//     },
//   },
//   exit: {
//     y: "100vh",
//     opacity: 0,
//   },
// };

// <motion.div
// drag
// onClick={(e) => e.stopPropagation()}
// className="modal"
// variants={dropIn}
// initial="hidden"
// animate="visible"
// exit="exit"
// >

// width: clamp(50%, 700px, 90%);
// height: min(50%, 300px);

// const Modal = styled(motion.div)`
//   background: white;
//   border-radius: 30px;
//   width: 150px;
//   height: 150px;
// `;

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

// const [modalOpen, setModalOpen] = useState(false)
// const close = () => setModalOpen(false)
// const open = () => setModalOpen(true)
// () => modalOpen ? close() : open()

// <AnimatePresence
// initial={false}  -disable any initial animations on children that are present when the component is first rendered
// exitBeforeEnter={true}  -only render one component at a time. The exiting component will finish its exit animation before entering component is rendered
// onExitComplete={()=>null}  -fires when all exiting nodes have copmleted animating out
//>
// {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}/>}
// </AnimatePresence>

//{
// <motion.div
//     animate={{x: move ? 200 : -200, rotate: rotate ? 360 : 0}}
//     transition={{type: "tween", duration: 0.1}}
//     onClick={()=>setMove(!move)}
// >
// </motion.div>
// }
