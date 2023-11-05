import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser";

export default async function handler(req,res) {
    if (req.method === "PATCH") {
        try {
            const result = await updateTicketByUser(req.body);
            if (result === 1) {
                res.status(400).send("Ticket Not Found");
            }else if (result === 2) {
                res.status(400).send("User Not Found");
            }else {
            res.status(200).send("Success.");
            }
        }catch {
            res.status(500).send("Failed."); //Complete bonus about whether or not it can determine if the ticket or user existed or it was the fault of the user.
        }

    }else {

        res.status(400).send("Please only use PATCH method at this API endpoint.");
    }
}