import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";

export default async function readTicketsByUser(data) {
    try {
        await connectDB();
    }catch (e) {
        console.log(e);
        throw new Error("Failed to connect to database...");
    }
    try {
        const {userID} = data;
        //Return a json objecct of all the tickets that match the userId
        const TicketQueries = await Ticket.find({userID: userID});
        //Above code returns a Query object, need to convert to documents
        //We can put multiple finds to further specify
        return TicketQueries; 

    }catch (e) {
        throw new Error("Failed to read all tickets from a specific user.")
    }
}