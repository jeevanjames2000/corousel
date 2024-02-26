import React from "react";
import { Grid, Link } from "@mui/material";
import mountain1 from "./assets/mountain1.jpg";
import flags from "./assets/flags.jpg";

const landingPageStyles = {
  background: `url(${mountain1}) no-repeat center center fixed`,
  backgroundSize: "cover",
  height: "100vh",
  position: "relative",
};

const logoStyles = {
  position: "relative",
  marginRight: "21rem",
  height: "50px",
  width: "50px",
  borderRadius: "50px",
};

const linkContainerStyles = {
  alignItems: "center",
  position: "absolute",
  top: "5%",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
};

const linkStyles = {
  textDecoration: "none",
  color: "white",
  marginLeft: "2rem",
};

const LandingPage = () => {
  const handleHistoryClick = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const handleTeamClick = () => {
    window.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
  };

  return (
    <Grid style={landingPageStyles}>
      <div style={linkContainerStyles}>
        <img src={flags} alt="Logo" style={logoStyles} />
        <Link href="#" onClick={handleHistoryClick} style={linkStyles}>
          History
        </Link>
        <Link href="#" onClick={handleTeamClick} style={linkStyles}>
          Team
        </Link>
      </div>
    </Grid>
  );
};

export default LandingPage;
