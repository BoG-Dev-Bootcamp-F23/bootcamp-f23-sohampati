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
    const ticket = new Ticket(data);
    await ticket.save();
    }catch (e) {
        throw new Error("Ticket object failed to save");
    }
    //Need to create object then save it, to make sure it is saved in the Database

    
}