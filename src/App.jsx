import "./App.css";

import { useCatFact } from "./services/hooks/useCatFact";
import { useCatImage } from "./services/hooks/useCatImage";

function App() {
  // Observar getFact
  const { fact, getFact } = useCatFact();
  const catimg = useCatImage(fact);

  return (
    <div className="container">
      <header className="header">
        <h1 className="header__title">Prueba técnica de gatitos</h1>
        <button onClick={getFact} className="header__button">
          Pedir Fact
        </button>
      </header>

      <main className="main">
        {fact && <p className="main__text">{fact}</p>}
        {catimg && <img className="main__img" src={catimg} alt={fact} />}
      </main>
    </div>
  );
}

export default App;
