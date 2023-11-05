export default async (req, res) => {
  const { type } = req.query;
if(req.method === "GET") {
    try {
        // Fetch data for a list of Pokemon of the specified type
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();
        // Process and return the data
        const pokemonList = data.pokemon.map((entry) => entry.pokemon.name);
        res.status(200).json({ pokemonList });
      } catch (error) {
        res.status(500).json({ error: 'Invalid Type' });
      }
} else {
     res.status(400).json({status: `Cannot complete a request of this type. Please use a GET query. `});
}
  
};
