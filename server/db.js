const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yaanftr.mongodb.net`;

module.exports = async () => {
  try {
    // Connect to MongoDB using the new recommended options
    await mongoose.connect(uri, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      // Other options if needed
    });

    console.log(`Connected to database successfully`);
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`);
  }
};
