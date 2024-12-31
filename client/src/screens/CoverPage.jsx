import * as React from "react";
import { Button, Typography } from "@mui/material";
import CoverLayout from "../components/CoverLayout";
import { useNavigate } from "react-router-dom";

const backgroundImage =
  "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1400";

export default function CoverPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("home button clicked");
    navigate("/home");
    window.location.reload();
  };

  return (
    <CoverLayout
      sxBackground={{
        backgroundImage: `linear-gradient(135deg, rgba(57, 201, 249, 0.8), rgba(127, 199, 217, 0.8)), url(${backgroundImage})`, // Gradient with the background image
        backgroundPosition: "center",
        backgroundSize: "cover", // Ensure the background image covers the entire layout
        backgroundBlendMode: "overlay", // Blend the background image with the gradient
        height: "100vh", // Full screen height
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography
        color="inherit"
        align="center"
        variant="h2"
        marked="center"
        sx={{ fontWeight: "bold" }}
      >
        Blockchain Based Voting System
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 }, fontStyle: "italic" }}
      >
        A decentralized voting system that is built on the Ethereum blockchain.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        sx={{
          minWidth: 200,
          borderRadius: "50px", // Rounded button for a modern look
          boxShadow: "0px 10px 20px rgba(57, 201, 249, 0.3)", // Soft shadow effect
        }}
        onClick={handleClick}
      >
        Enter the Voting System
      </Button>
    </CoverLayout>
  );
}
