import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import axios from "axios";

export default function CandidateForm({ contract, web3, currentAccount }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleForm = async (event) => {
    event.preventDefault();
    try {
      // Make POST request to your backend
      const response = await axios.post(
        "http://localhost:5000/api/candidates",
        {
          name,
        }
      );
      const candidateId = response.data.candidateId;

      await contract.methods
        .addCandidate(address, candidateId)
        .send({ from: currentAccount });
      console.log("candidate added");
    } catch (error) {
      console.log(error);
    }
    setName("");
    setAddress("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        width: "40%",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleForm}
    >
      <Stack spacing={2}>
        <TextField
          id="outlined-basic"
          label="Candidate Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />

        <TextField
          id="outlined-basic"
          label="Candidate Address"
          variant="outlined"
          value={address}
          onChange={handleAddressChange}
        />
        <Button variant="contained" type="submit">
          Add Candidates
        </Button>
      </Stack>
    </Box>
  );
}
