import "./index.scss";
import { useTheme } from "@mui/material/styles";

type Props = {
  children: React.ReactNode;
};

const GeometricBackground = ({ children }: Props) => {
  const theme = useTheme();

  return (
    <div
      className="geometric-background"
      style={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      <div
        className="geometric-background__cube"
        style={{
          borderColor: theme.palette.primary.dark,
        }}
      ></div>
      <div
        className="geometric-background__cube"
        style={{
          borderColor: theme.palette.primary.light,
        }}
      ></div>
      <div
        className="geometric-background__cube"
        style={{
          borderColor: theme.palette.primary.main,
        }}
      ></div>
      <div
        className="geometric-background__cube"
        style={{
          borderColor: theme.palette.primary.dark,
        }}
      ></div>
      <div
        className="geometric-background__cube"
        style={{
          borderColor: theme.palette.primary.light,
        }}
      ></div>
      <div
        className="geometric-background__cube"
        style={{
          borderColor: theme.palette.primary.main,
        }}
      ></div>
      {children}
    </div>
  );
};

export default GeometricBackground;
