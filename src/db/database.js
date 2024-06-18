const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://daogiahuy2002:huyliem2002@cluster0.a9rwhtm.mongodb.net/e-commerce"
    );
    console.log("Successfully connected");
  } catch (error) {
    console.log("Failed to connect");
  }
}

module.exports = { connect };
