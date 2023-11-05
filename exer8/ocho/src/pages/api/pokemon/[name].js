export default async function handler(req, res) {
    if(req.method === "GET") {
        const { name } = req.query;
  
        try {
          // Fetch data for the specified Pokemon
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
          const data = await response.json();
          // Process and return the data
          res.status(200).json({
            name: data.name,
            sprite: data.sprites.front_default,
            type: data.types[0].type.name,
          });
        } catch (error) {
          res.status(500).json({ error: 'This pokemon was not found.' });
        }
      } else {
        return res.status(401).json({status: `Cannot complete a request of this type. Please use a GET query. `});
    }
}
