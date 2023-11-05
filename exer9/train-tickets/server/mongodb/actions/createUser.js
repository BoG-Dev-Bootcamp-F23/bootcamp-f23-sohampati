import connectDB from "../index.js";
import User from "../models/User.js";

export default async function createTicket(data) {

    try {
        await connectDB();
    }catch (e) {
        //Throw an exception if something bad happens
        console.log(e);
        throw new Error("Database failed to connect...");
    }
    try {
    const user = new User(data);
    await user.save();
    }catch (e) {
        throw new Error("User object failed to save");
    }
    //Need to create object then save it, to make sure it is saved in the Database

    
}