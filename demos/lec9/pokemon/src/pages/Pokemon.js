import { useParams } from "react-router-dom";

export default function Pokemon() {
  const params = useParams();
  const id = params.pokemonId;

  return <>{id}</>;
}
