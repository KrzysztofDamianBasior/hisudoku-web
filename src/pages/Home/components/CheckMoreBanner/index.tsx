import React from "react";
import { Typography, Divider, makeStyles, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import StorageIcon from "@mui/icons-material/Storage";
import Container from "@mui/material/Container";

const CheckMoreBanner = () => {
  const theme = useTheme();
  return (
    <Container>
      <Divider component="div" role="presentation">
        <Typography
          variant="h2"
          display="block"
          align="center"
          gutterBottom={true}
        >
          HiSudoku
        </Typography>
      </Divider>

      <Typography
        variant="h4"
        display="block"
        align="center"
        gutterBottom={true}
        sx={{ my: "20px" }}
      >
        Web application to play and share sudokus
      </Typography>

      <Divider />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          //   border: "1px dashed grey",
          margin: "40px",
        }}
      >
        <LinkedInIcon
          sx={{
            margin: "5px",
            width: 150,
            height: 150,
            transition: "color .5s linear",
            cursor: "pointer",
            "&:hover": {
              color: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <GitHubIcon
          sx={{
            margin: "5px",
            width: 150,
            height: 150,
            transition: "color .5s linear",
            cursor: "pointer",
            "&:hover": {
              color: "primary.main",
              opacity: [0.9, 0.8, 0.7],
              // "inset 0 0 50px #fff, inset 20px 0 80px #f0f, inset -20px 0 80px #0ff,inset 20px 0 300px #f0f,inset -20px 0 300px #0ff,0 0 50px #fff,-10px 0 80px #f0f,10px 0 80px #0ff",
            },
          }}
        />
        <StorageIcon
          sx={{
            margin: "5px",

            width: 150,
            height: 150,
            transition: "color .5s linear",
            cursor: "pointer",
            "&:hover": {
              color: "primary.main",
              opacity: 0.7,
            },
          }}
        />
      </Box>

      <Divider />

      <Typography
        variant="h5"
        display="block"
        align="center"
        gutterBottom={true}
      >
        copyright &copy;2023.
      </Typography>
    </Container>
  );
};

export default CheckMoreBanner;
