const mongoose = require("mongoose");
const {DB_HOST,DB_USER,DB_PASSWORD,IP_SERVER,API_VERSION} = require("./constants");


mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`, 
    (error) => {
        if(error) throw error;

        console.log("Conexin con MONGO DB exitosa");
    }
)