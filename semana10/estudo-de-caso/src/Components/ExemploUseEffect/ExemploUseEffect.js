import { useEffect, useState } from "react";


function ExemploUseEffect(props) {
  const { value } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect foi executado com o Value: " + value);
  });

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Muda Valor
      </button>
    </div>
  );
}

export default ExemploUseEffect;