const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DB connection established.");
    } catch (error) {
        console.log("Error connecting to DB: "+ error);
    }
};

module.exports = connectToDB;