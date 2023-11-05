import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    lineColor: {
        type: String,
        required: true
    },
    station: {
        type: String,
        required: true
    },
    userID: {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    }
});

export default mongoose.models?.Ticket || mongoose.model("Ticket",TicketSchema);
//The Ticket is a like a collection in MongoDB, and the schema is used to build that collection.



