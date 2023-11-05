import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";

export default async function createTicket(data) {

    try {
        await connectDB();
    }catch (e) {
        //Throw an exception if something bad happens
        console.log(e);
        throw new Error("Database failed to connect...");
    }
    try {
        const {ticketID} = data;
        
        return await Ticket.findByIdAndDelete(ticketID); //Always make to await when you are interacting with the database.
        //Should make it send a user error if you enable to wrong query.
        
        
    }catch (e) {
        throw new Error("Failed to delete ticket object");
    }
    //Need to create object then save it, to make sure it is saved in the Database

    
}