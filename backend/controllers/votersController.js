const Voter = require("../schemas/voter"); // Adjust the path as needed

// Create a new voter
const createVoter = async (voterData) => {
  try {
    const newVoter = new Voter(voterData);
    const savedVoter = await newVoter.save();
    console.log("Voter created:", savedVoter);
    return savedVoter;
  } catch (error) {
    console.error("Error creating voter:", error);
    throw error;
  }
};

// Read all voters
const getAllVoters = async () => {
  try {
    const voters = await Voter.find();
    console.log("All voters:", voters);
    return voters;
  } catch (error) {
    console.error("Error retrieving voters:", error);
    throw error;
  }
};

// Read a voter by ID
const getVoterById = async (voterId) => {
  try {
    const voter = await Voter.findById(voterId);
    if (!voter) {
      console.log("Voter not found");
      return null;
    }
    console.log("Voter details:", voter);
    return voter;
  } catch (error) {
    console.error("Error retrieving voter:", error);
    throw error;
  }
};

// Read a voter by voterId
const getVoterByVoterId = async (voterId) => {
  try {
    const voter = await Voter.findOne({ voterId: voterId });
    if (!voter) {
      console.log("Voter not found");
      return null;
    }
    console.log("Voter details:", voter);
    return voter;
  } catch (error) {
    console.error("Error retrieving voter:", error);
    throw error;
  }
};

// Update a voter by ID
const updateVoter = async (voterId, updatedData) => {
  try {
    const updatedVoter = await Voter.findByIdAndUpdate(voterId, updatedData, {
      new: true,
    });
    if (!updatedVoter) {
      console.log("Voter not found for update");
      return null;
    }
    console.log("Voter updated:", updatedVoter);
    return updatedVoter;
  } catch (error) {
    console.error("Error updating voter:", error);
    throw error;
  }
};

// Delete a voter by ID
const deleteVoter = async (voterId) => {
  try {
    const deletedVoter = await Voter.findByIdAndDelete(voterId);
    if (!deletedVoter) {
      console.log("Voter not found for deletion");
      return null;
    }
    console.log("Voter deleted:", deletedVoter);
    return deletedVoter;
  } catch (error) {
    console.error("Error deleting voter:", error);
    throw error;
  }
};

module.exports = {
  createVoter,
  getAllVoters,
  getVoterById,
  getVoterByVoterId,
  updateVoter,
  deleteVoter,
};
