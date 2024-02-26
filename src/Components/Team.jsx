import React from "react";
import {
  Grid,
  Tab,
  Tabs,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import mountain1 from "./assets/mountain1.jpg";
import mountain2 from "./assets/mountain2.jpg";
import mountain3 from "./assets/mountain3.jpg";

const teamPageStyles = {
  background: `url(${mountain3}) no-repeat center center fixed`,
  backgroundSize: "cover",
  minHeight: "100vh",
  padding: "20px",
};

const footerStyles = {
  position: "relative",
  top: 100,
  bottom: 0,
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  padding: "5px",
};

const TeamPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={teamPageStyles}
    >
      <Typography variant="h1" style={{ marginBottom: "20px", color: "white" }}>
        02.<span style={{ fontSize: "4rem" }}>CLIMB</span>
      </Typography>
      <Typography variant="h4" style={{ marginBottom: "10px", color: "white" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
        adipiscing elit. Vivamus veladipiscing elit. Vivamus adipiscing elit.
        Vivamus vel quam id elit.
      </Typography>

      {/* <div style={{ backgroundColor: "slategray", width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            label="Mountain 1"
            style={{ color: "white", fontSize: "20px" }}
          />
          <Tab
            label="Mountain 2"
            style={{ color: "white", fontSize: "20px" }}
          />
        </Tabs>
      </div>
      <div style={{ width: "100%", width: "100%" }}>
        {value === 0 && (
          <img
            src={mountain1}
            alt="Mountain 1"
            style={{ width: "100%", marginBottom: "20px" }}
          />
        )}
        {value === 1 && (
          <img
            src={mountain2}
            alt="Mountain 2"
            style={{ width: "100%", marginBottom: "20px" }}
          />
        )}
      </div> */}
      <Accordion sx={{ width: "100%", maxWidth: "600px" }}>
        <AccordionSummary
          expandIcon={"^"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Mountain 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img
              src={mountain1}
              alt="Mountain 1"
              style={{ width: "100%", marginBottom: "20px" }}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "100%", maxWidth: "600px" }}>
        <AccordionSummary
          expandIcon={"^"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Mountain 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img
              src={mountain2}
              alt="Mountain 2"
              style={{ width: "100%", marginBottom: "20px" }}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ width: "100%", maxWidth: "600px" }}>
        <AccordionSummary
          expandIcon={"^"}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Mountain 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img
              src={mountain3}
              alt="Mountain 3"
              style={{ width: "100%", marginBottom: "20px" }}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <footer style={footerStyles}>
        <Typography variant="h6" align="center">
          © {new Date().getFullYear()} Your Website. All rights reserved.
        </Typography>
      </footer>
    </Grid>
  );
};

export default TeamPage;
