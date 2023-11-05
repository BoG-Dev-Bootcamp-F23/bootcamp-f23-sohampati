import createUser from "../../../server/mongodb/actions/createUser.js";

export default async function handler(req,res) {
    if (req.method === "POST") {
        try {
            await createUser(req.body);
            res.status(200).send("Success");
        }catch (e) {
            res.status(500).send("Failed");
        }

    }else {
        res.status(400).send("Only POST method available at this API endpoint.");
    }
}