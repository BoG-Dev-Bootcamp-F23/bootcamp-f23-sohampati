import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser.js";

export default async function handler(req,res) {
    if (req.method === "GET") {
        try {
            const ticketQueries = await readTicketsByUser(req.query);
            res.status(200).json(ticketQueries);

        }catch (e) {
            res.status(500).send("Failed.");
        }

    }else {
        res.status(400).send("Please only use GET method at this API endpoint.");
    }
}