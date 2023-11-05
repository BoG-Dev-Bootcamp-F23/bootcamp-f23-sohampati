import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import User from "../models/User.js";
import mongoose from "mongoose";
export default async function updateTicketByUser(data) {
    try {
        connectDB();
    }catch (e) {
        console.log(e);
        throw new Error("Failed to connect to DB...");
    }
    try {
        const {ticketID, userID} = data;
        //Check here that the userID works
        const pattern = "^[0-9a-zA-Z]{24}$"
        if (!userID.match(pattern)) {
            return 2;
        }
        if (!ticketID.match(pattern)) {
            return 1;
        }
        let result = await User.findById(userID);
        
        //Ensure that 
        if (result === null) {
            return 2;
        }
        console.log(result);
        result = await Ticket.findByIdAndUpdate(ticketID,{userID: userID}); //Guessing this doesn't work 
        console.log(result);
        if (result === null) {
            return 1;
        }

    }catch (e) {
        console.log(e);
        throw new Error("Failed to update UserID in ticket");
    }
}
