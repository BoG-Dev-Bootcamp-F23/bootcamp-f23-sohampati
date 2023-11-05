function getRandomInteger(min, max) {
  // Use Math.floor to round down to the nearest integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default async (req, res) => {
  if(req.method === 'GET') {
    try {
      // Fetch data for a random Pokemon
      // up to 1017, must generate random int between 1-1017, inclusive
      const id = getRandomInteger(1,1017);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      // Process and return the data
      res.status(200).json({
        name: data.name,
        sprite: data.sprites.front_default,
        type: data.types[0].type.name,
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }else {
    res.status(400).json({status: `Cannot complete a request of this type. Please use a GET query. `});
  
  }
  
};