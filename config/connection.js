import mongoose from "mongoose";
const USERNAME = 'ramsena'; 
const PASSWORD = 'DgdSzlLU32aQqmex';
const DB_NAME = 'ramsenav1data'; // Replace with your actual database name

// Construct the connection string with the username, password, and database name
// const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.sxpngpr.mongodb.net/${DB_NAME}`;
// let connectoin = mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.sxpngpr.mongodb.net/${DB_NAME}`) ;
const connectoin = mongoose.connect(`mongodb+srv://ramsena:DgdSzlLU32aQqmex@ramsenav1data.95kmwqt.mongodb.net/`)

export default connectoin ;