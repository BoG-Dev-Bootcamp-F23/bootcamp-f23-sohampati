export default async function handler(req, res) {
    const name = req.query.name;
    const speciesURL = "https://pokeapi.co/api/v2/pokemon-species/";
    if (req.method === 'GET') {
      if (name) {
        const response = await fetch(speciesURL + name);
        try {
          const data = await response.json();
          const evolveURL = data.evolution_chain.url;
    
          const evolveResponse = await fetch(evolveURL);
          const evolveData = await evolveResponse.json();
    
          let lol = [evolveData.chain];
          let hmm = [];
    
          while (lol.length > 0) {
            const curr = lol.shift();
            if (curr.species.name === name) {
              if (curr.evolves_to && curr.evolves_to.length > 0) {
                hmm = curr.evolves_to.map((childPokemon) => childPokemon.species.name);
              } else {
                hmm.push(name);
              }
              break;
            }
            lol = [...lol, ...curr.evolves_to];
          }
          const s = {
            evolves_to: hmm
          }
          res.status(200).json(s);
        } catch (error) {
          res.status(400).json({ error: "This Pokemon does not exist, check your spelling" });
        }
      }
    }else {
        es.status(401).json({status: `Cannot complete a request of this type. Please use a GET query. `});
    }
  }