import createTicket from "../../../server/mongodb/actions/createTicket.js";

export default async function hander(req,res) {
    if (req.method === "POST") {
        try {
            await createTicket(req.body);
            res.status(200).send("Success");
        }catch {
            res.status(500).send("Failed");
        }

    }else {
        res.status(400).send("Only POST method available at this API endpoint.");
    }
}