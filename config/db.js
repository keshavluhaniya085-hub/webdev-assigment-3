const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/inventory_db';
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    console.warn(`Please ensure MongoDB is running or configure MONGO_URI in .env`);
  }
};

module.exports = connectDB;
