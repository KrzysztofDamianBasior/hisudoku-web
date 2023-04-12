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
