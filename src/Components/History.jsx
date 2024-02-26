import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import mountain1 from "./assets/mountain1.jpg";
import mountain2 from "./assets/mountain2.jpg";
import mountain3 from "./assets/mountain3.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const HistoryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      count: 1,
      src: mountain1,
      title: "Los Angeles",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel quam id elit.",
    },
    {
      count: 2,
      src: mountain2,
      title: "Himalayas",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel quam id elit.",
    },
    {
      count: 3,
      src: mountain3,
      title: "Mountains",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel quam id elit.",
    },
  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} style={{ maxWidth: "100%" }}>
        <AutoPlaySwipeableViews index={currentIndex}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "white",
                  textAlign: "center",
                  zIndex: "1",
                  width: "80%",
                }}
              >
                <div style={{ fontSize: "3rem", fontWeight: "bolder" }}>
                  {image.title}
                </div>
                <div style={{ fontSize: "2rem" }}>{image.text}</div>
              </div>
              <img
                src={image.src}
                alt={`Mountain ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                mt={2}
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  overflowX: "auto",
                  maxWidth: "100%",
                  whiteSpace: "nowrap",
                }}
              >
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={`Mountain ${idx + 1}`}
                    style={{
                      height: "10rem",
                      width: "15rem",
                      borderRadius: "5%",
                      margin: "0 5px",
                      cursor: "pointer",
                      border: currentIndex === idx ? "2px solid white" : "none",
                    }}
                    onClick={() => handleImageClick(idx)}
                  />
                ))}
              </Box>
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Grid>
    </Grid>
  );
};

export default HistoryPage;
