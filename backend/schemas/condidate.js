const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  candidateId: { type: Number, unique: true },
});

// Apply the auto-increment plugin to the candidateId field
candidateSchema.plugin(AutoIncrement, { inc_field: "candidateId" });

module.exports = mongoose.model("Candidate", candidateSchema);
