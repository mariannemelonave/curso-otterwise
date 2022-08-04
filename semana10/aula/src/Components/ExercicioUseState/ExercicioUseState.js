import { useState } from "react";

function ExercicioUseState() {
  const [name, setName] = useState(true);
  return (
    <div>
      <button onClick={() => setName(!name)}>Troca</button>
      {name ? <p>Marianne Melo</p> : ""}
    </div>
  );
}

export default ExercicioUseState;