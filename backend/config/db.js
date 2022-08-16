const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://raghavmatta:raghav123@cluster0.dkuj7do.mongodb.net/mernapp?retryWrites=true&w=majority"
    );
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline); //VARIABLE CONN THEN CONNECTING WITH ENV FILE
  } catch (error) {
    console.log(error);
    process.exit(1);
  } //creating fn using arrow method normal method only no rs
};
module.exports = connectDB;
