import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Candidate({ id, name, voteCount, address }) {
  const IMG =
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=1400";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 350,
        padding: 3,
        margin: "auto",
        borderRadius: 3,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)",
        backgroundColor: "#1e1e1e",
        color: "#ffffff",
      }}
    >
      {/* Candidate Image */}
      <Box
        component="img"
        src={IMG}
        alt={name}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "cover",
          borderRadius: 3,
          marginBottom: 2,
        }}
      />

      {/* Candidate Details */}
      <Box sx={{ textAlign: "start", width: "100%" }}>
        {/* Candidate Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            color: "#e0e0e0",
          }}
        >
          {name}
        </Typography>

        {/* Vote Count */}
        {voteCount && (
          <Typography
            variant="body1"
            sx={{
              color: "#81c784",
              fontWeight: "medium",
              marginBottom: 1,
            }}
          >
            Votes: {voteCount}
          </Typography>
        )}

        {/* Address */}
        {address && (
          <Typography
            variant="body2"
            sx={{
              color: "#bdbdbd",
            }}
          >
            {address}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
