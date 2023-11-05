export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    if(req.method === 'POST') {
        const body = req.body;
        if (!body) {
            return res.status(400).json({ error: "The body is invalid." });
        }
        const one = body.one;
        const two = body.two;
        try {
            
            const firstPoke = url + one;
            const secondPoke = url + two;
            const responseOne = await fetch(url + one);
            console.log(firstPoke);
            console.log(secondPoke);
            const responseTwo = await fetch(url + two);
            const dataOne  = await responseOne.json();
            const dataTwo = await responseTwo.json();
            const statOne = parseInt(dataOne.stats[0].base_stat);
            const statTwo = parseInt(dataTwo.stats[0].base_stat);
            if (statOne > statTwo) {
                res.status(200).json({
                    higherHP: one
                });
            } else if (statTwo === statOne) {
                res.status(200).json({
                    higherHP:  `${firstPoke} and ${secondPoke} have equal base stats`
                });
            } else {
                res.status(200).json({
                    higherHP: two
                });
            }
            
        } catch (error) {
            res.status(400).json({ error: "Invalid Pokemon"});
            
        }
     

        
    } else {
        return res.status(401).json({status: `Cannot complete a request of this type. Please use a POST query. `});
    }
}