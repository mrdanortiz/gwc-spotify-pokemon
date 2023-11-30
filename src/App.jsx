import "./App.css";
import { NavBar } from "./components/NavBar";
import { PokemonCard } from "./components/PokemonCard";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="background">
        <PokemonCard 
          title="Charmander" 
          image="https://heatherketten.files.wordpress.com/2018/03/my_charmander.gif" />
      </div>
    </div>
  );
};

export default App;
